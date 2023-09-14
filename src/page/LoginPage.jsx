import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const LoginPage = ({ setIsAuth }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (user.username === "javohir" && user.password === "777") {
      navigate("/");
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    } else {
      toast.error("Username: javohir, Password: 777");
    }
  };

  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <section>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card">
              <div className="card-body">
                <Form onSubmit={submit}>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      //   value={user.username}
                      onChange={handleUser}
                      required
                      type="text"
                      placeholder="username"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label className="my-3">Password</Form.Label>
                    <Form.Control
                      //   value={user.password}
                      onChange={handleUser}
                      required
                      type="password"
                      placeholder="password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Button className="mt-3 float-end" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
LoginPage.propTypes = {
  setIsAuth: PropTypes.func,
};
export default LoginPage;
