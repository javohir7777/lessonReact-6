import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentsTable = ({ prices, edit, deleteCategory }) => {
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prices.length ? (
            prices.map(
              (
                { productName, price, category, quantity, description, id },
                i
              ) => (
                <tr key={id}>
                  <td>{i + 1}</td>
                  <td>{productName}</td>
                  <td>{price}</td>
                  <td>{category}</td>
                  <td>{quantity}</td>
                  <td>{description}</td>
                  <td className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => edit(id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCategory(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
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
  edit: PropTypes.func,
  deleteCategory: PropTypes.func,
};

const MemoStudentsTable = memo(StudentsTable);
export default MemoStudentsTable;
