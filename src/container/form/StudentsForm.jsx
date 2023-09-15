import { Button, FloatingLabel, Form } from "react-bootstrap";
import { pricees } from "../../data/data";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentsForm = ({ validated, handleSubmit, price, handlePrice }) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          onChange={handlePrice}
          value={price.productName}
          required
          type="text"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Place fill</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={handlePrice}
          value={price.price}
          required
          type="number"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Place fill</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select onChange={handlePrice} value={price.category} required>
          {pricees.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Place fill</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          onChange={handlePrice}
          value={price.quantity}
          required
          type="number"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Place fill</Form.Control.Feedback>
      </Form.Group>

      <FloatingLabel
        controlId="description"
        label="Description"
        className="mt-3"
      >
        <Form.Control
          onChange={handlePrice}
          value={price.description}
          required
          type="text"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Place fill</Form.Control.Feedback>
      </FloatingLabel>

      <Button className="mt-3 w-100" type="submit">
        Add Prodact
      </Button>
    </Form>
  );
};

StudentsForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  price: PropTypes.object,
  handlePrice: PropTypes.func,
};

const MemoStudentsForm=memo(StudentsForm)

export default MemoStudentsForm;
