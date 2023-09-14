import { Form, InputGroup } from "react-bootstrap";

const StudentSearch = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Search..." />
        <InputGroup.Text id="basic-addon2">Add</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default StudentSearch;
