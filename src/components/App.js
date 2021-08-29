import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import shopContext from "./ShopContext";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/theme";
import Routes from "./Routes";
// https://fakestoreapi.com/docs

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems((items) => [...items, item]);
  const removeItem = (id) =>
    setItems((items) => items.filter((k) => k.id !== id));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <shopContext.Provider value={{ items, addItem, removeItem }}>
          <Header />
          <Routes />
        </shopContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
