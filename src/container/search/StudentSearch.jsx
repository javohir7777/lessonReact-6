import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentSearch = ({ search, handleSearch }) => {
  return (
    <div className="mt-3">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search..."
          search={search}
          onChange={handleSearch}
        />
        <InputGroup.Text id="basic-addon2">Add</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

StudentSearch.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
};

const MemoStudentSearch = memo(StudentSearch);
export default MemoStudentSearch;
