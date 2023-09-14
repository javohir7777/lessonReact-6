import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const isAuthLocal = localStorage.getItem("isAuth");
  const [isAuth, setIsAuth] = useState(isAuthLocal);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
