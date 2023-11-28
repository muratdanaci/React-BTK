import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi /> {/* <Navi><Navi/>  ile ayni*/}
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
