import { createContext, useState } from "react";

const LocaleContext = createContext();

function LocaleProvider({ defaultValue, children }) {
  const [locale, setLocale] = useState(defaultValue);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export { LocaleContext, LocaleProvider };
