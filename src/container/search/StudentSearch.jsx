import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentSearch = ({ search, handleSearch, averagePrice }) => {
  return (
    <div className="mt-3">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search..."
          search={search}
          onChange={handleSearch}
        />
        <InputGroup.Text id="basic-addon2">{averagePrice}</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

StudentSearch.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  averagePrice: PropTypes.number,
};

const MemoStudentSearch = memo(StudentSearch);
export default MemoStudentSearch;
