import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentsTable = ({ prices }) => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {prices.length ? (
            prices.map((price, i) => (
              <tr key={price.id}>
                <td>{i + 1}</td>
                <td>{price.productName}</td>
                <td>{price.price}</td>
                <td>{price.category}</td>
                <td>{price.quantity}</td>
                <td>{price.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No prodacts
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
StudentsTable.propTypes = {
  prices: PropTypes.array,
};

const MemoStudentsTable = memo(StudentsTable);
export default MemoStudentsTable;
