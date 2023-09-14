import { Card, Col, Row } from "react-bootstrap";
import StudentsForm from "../container/form/StudentsForm";
import StudentSearch from "../container/search/StudentSearch";
import StudentsTable from "../container/table/StudentsTable";
import { useState } from "react";
import { v4 } from "uuid";

const HomePage = () => {
  const pricesJSON = localStorage.getItem("prices");
  const [validated, setValidated] = useState(false);
  const [prices, setPrices] = useState(JSON.parse(pricesJSON) || []);
  const [price, setPrice] = useState({
    productName: "",
    price: "",
    category: "Drinks",
    quantity: "",
    description: "",
  });

  const handlePrice = (e) => {
    setPrice({ ...price, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    event.preventDefault();
    if (form.checkValidity()) {
      const newProducts = [...prices, { ...price, id: v4() }];
      setPrices(newProducts);

      localStorage.setItem("prices", JSON.stringify(newProducts));

      setValidated(false);
      setPrice({
        productName: "",
        price: "",
        category: "Drinks",
        quantity: "",
        description: "",
      });
    }
  };
  return (
    <Card className="container mt-4">
      <Card.Body>
        <Row>
          <Col lg={4}>
            <StudentsForm
              validated={validated}
              handleSubmit={handleSubmit}
              handlePrice={handlePrice}
              price={price}
            />
          </Col>
          <Col lg={8}>
            <StudentSearch />
            <StudentsTable prices={prices} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HomePage;
