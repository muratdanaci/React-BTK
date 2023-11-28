import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
function App() {
  return (
    <div>
      <h2>Hello From React</h2>
      <Navi /> {/* <Navi><Navi/>  ile ayni*/}
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
