import { Card, Col, Row } from "react-bootstrap";
import StudentsForm from "../container/form/StudentsForm";
import StudentSearch from "../container/search/StudentSearch";
import StudentsTable from "../container/table/StudentsTable";
import { useCallback, useMemo, useState } from "react";
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
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const handlePrice = useCallback(
    (e) => {
      setPrice({ ...price, [e.target.id]: e.target.value });
    },
    [price]
  );

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      setValidated(true);
      event.preventDefault();
      if (form.checkValidity()) {
        let newProducts;
        if (selected === null) {
          newProducts = [...prices, { ...price, id: v4() }];
        } else {
          newProducts = prices.map((el) => {
            if (el.id === selected) {
              return price;
            } else {
              return el;
            }
          });
          setSelected(null);
        }

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
    },
    [price, prices]
  );

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value.trim().toLowerCase());
  }, []);

  const resalt = useMemo(
    () =>
      prices.filter((ell) =>
        ell.productName.trim().toLowerCase().includes(search)
      ),
    [prices, search]
  );

  const edit = useCallback(
    (id) => {
      const oneId = prices.find((el) => el.id === id);
      setSelected(id);
      setPrice(oneId);
    },
    [prices]
  );

  const averagePrice = +(
    resalt.reduce((acc, ell) => acc + +ell.price, 0) / prices.length
  ).toFixed(2);

  const deleteCategory = useCallback(
    (id) => {
      let deleteCategory = prices.filter((ell) => ell.id !== id);
      setPrices(deleteCategory);
      localStorage.setItem("prices", JSON.stringify(deleteCategory));
    },
    [prices]
  );
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
              selected={selected}
            />
          </Col>
          <Col lg={8}>
            <StudentSearch
              search={search}
              handleSearch={handleSearch}
              averagePrice={averagePrice}
            />
            <StudentsTable
              prices={resalt}
              edit={edit}
              deleteCategory={deleteCategory}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HomePage;
