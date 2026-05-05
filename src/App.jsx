import { useEffect, useState } from "react";

import useTranslate from "./hooks/useTranslate";
import axios from "./utils/axios";

import Modal from "./components/Modal/Modal";
import Layout from "./components/Layout/Layout";
import FoodList from "./components/Food/FoodList";
import FoodForm from "./components/Food/FoodForm";
import Button from "./components/Button/Button";

import styles from "./App.module.css";

import searchImage from "./assets/ic_search.svg";

const LIMIT = 10;

function App() {
  const t = useTranslate();

  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [keyword, setKeyword] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [cursor, setCursor] = useState();

  const handleLoad = async (orderParams, searchParam) => {
    const response = await axios.get("/foods", {
      params: { order: orderParams, search: searchParam, limit: LIMIT },
    });
    const { foods, paging } = response.data;
    setItems(foods);
    setCursor(paging.nextCursor);
  };

  const handleLoadMore = async () => {
    const response = await axios.get("/foods", {
      params: {
        order,
        search: keyword,
        limit: LIMIT,
        cursor,
      },
    });
    const { foods, paging } = response.data;
    setItems((prevItems) => [...prevItems, ...foods]);
    setCursor(paging.nextCursor);
  };

  const handleLatestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleCreate = async (data) => {
    // const now = new Date();
    // const newItem = {
    //   id: items.length + 1,
    //   ...data,
    //   createdAt: now.valueOf(),
    //   updatedAt: now.valueOf(),
    // };

    const response = await axios.post("/foods", data);
    const { food } = response.data;

    // setItems([newItem, ...items]);
    setItems((prevItems) => [food, ...prevItems]);
    setIsCreateModalOpen(false);
  };

  const handleUpdate = async (id, data) => {
    const response = await axios.patch(`/foods/${id}`, data);
    const { food } = response.data;

    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);

      return [
        ...prevItems.slice(0, index),
        food,
        ...prevItems.slice(index + 1),
      ];
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/foods/${id}`);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // const resultItems = items
  //   .sort((a, b) => b[order] - a[order])
  //   .filter(
  //     (item) => item.title.includes(keyword) || item.content.includes(keyword),
  //   );

  useEffect(() => {
    handleLoad(order, keyword);
  }, [order, keyword]);

  return (
    <Layout>
      <header className={styles.header}>
        <article className={styles.inputGroup}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder={t("enter the keyword")}
            value={keyword}
            onChange={handleKeywordChange}
          />
          <img className={styles.searchImage} src={searchImage} alt={t("")} />
        </article>
        <div className={styles.buttonGroup}>
          <div className={styles.orderButtons}>
            <Button
              variant='quaternary'
              active={order === "createdAt" ? true : false}
              onClick={handleLatestClick}
            >
              {t("sort by latest")}
            </Button>
            <Button
              variant='quaternary'
              active={order === "calorie" ? true : false}
              onClick={handleCalorieClick}
            >
              {t("sort by calorie")}
            </Button>
          </div>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            {t("create button")}
          </Button>
        </div>
      </header>
      <Modal
        title={t("create calorie title")}
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      >
        <FoodForm onSubmit={handleCreate} />
      </Modal>
      <FoodList items={items} onDelete={handleDelete} onUpdate={handleUpdate} />
      {cursor && (
        <Button variant='loadMore' onClick={handleLoadMore}>
          더보기
        </Button>
      )}
    </Layout>
  );
}

export default App;
