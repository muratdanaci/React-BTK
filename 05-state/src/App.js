import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
function App() {
  let categoryInfo = {title: "Category List"};
  let productInfo = {title: "Product List", p1:"Mac"};
  return (
    <div>
      <Container>
        <Row>
          <Navi /> {/* <Navi><Navi/>  ile ayni*/}
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
