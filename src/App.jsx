import { useState } from "react";
import mockData from "./mock.json";
import Modal from "./components/Modal/Modal";
import Layout from "./components/Layout/Layout";
import FoodList from "./components/Food/FoodList";
import FoodForm from "./components/Food/FoodForm";
import Button from "./components/Button/Button";
import styles from "./App.module.css";
import searchImage from "./assets/ic_search.svg";

function App() {
  const [items, setItems] = useState(mockData);
  const [order, setOrder] = useState("createdAt");
  const [keyword, setKeyword] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleLatestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleCreate = (data) => {
    const now = new Date();
    const newItem = {
      id: items.length + 1,
      ...data,
      createdAt: now.valueOf(),
      updatedAt: now.valueOf(),
    };

    setItems([newItem, ...items]);
    setIsCreateModalOpen(false);
  };

  const handleUpdate = (id, data) => {
    const index = items.findIndex((item) => item.id === id);
    const now = new Date();
    const newItem = {
      ...items[index],
      ...data,
      updatedAt: now.valueOf(),
    };
    const newItems = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1),
    ];

    setItems(newItems);
  };

  const resultItems = items
    .sort((a, b) => b[order] - a[order])
    .filter(
      (item) => item.title.includes(keyword) || item.content.includes(keyword),
    );

  return (
    <Layout>
      <header className={styles.header}>
        <article className={styles.inputGroup}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='검색어를 입력해주세요.'
            value={keyword}
            onChange={handleKeywordChange}
          />
          <img
            className={styles.searchImage}
            src={searchImage}
            alt='검색어 인풋 아이콘'
          />
        </article>
        <div className={styles.buttonGroup}>
          <div className={styles.orderButtons}>
            <Button
              variant='quaternary'
              active={order === "createdAt" ? true : false}
              onClick={handleLatestClick}
            >
              최신순
            </Button>
            <Button
              variant='quaternary'
              active={order === "calorie" ? true : false}
              onClick={handleCalorieClick}
            >
              칼로리순
            </Button>
          </div>
          <Button onClick={() => setIsCreateModalOpen(true)}>추가하기</Button>
        </div>
      </header>
      <Modal
        title='칼로리 기록하기'
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      >
        <FoodForm onSubmit={handleCreate} />
      </Modal>
      <FoodList
        items={resultItems}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </Layout>
  );
}

export default App;
