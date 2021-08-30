import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import shopContext from "./ShopContext";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/theme";
import Routes from "./Routes";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item, qtty) =>
    setItems((items) => {
      const tempArr = items.filter((k) => k.id === item.id);
      if (tempArr.length > 0) {
        const oldqtty = tempArr[0].quantity;
        return [
          ...items.filter((k) => k.id !== item.id),
          { ...item, quantity: qtty + oldqtty },
        ];
      }
      return [...items, { ...item, quantity: qtty }];
    });

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
