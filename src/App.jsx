import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar";
import { ItemListContainer } from "./components/pages/ItemListContainer";
import { Cart } from "./components/common/Cart";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
