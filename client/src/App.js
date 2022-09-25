import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ChangePassword from "./Pages/ChangePassword";
import ForgetPassword from "./Pages/ForgetPassword";
import Home from "./Pages/Home";
import ProtectedRoutes from "./Services/ProtectedRoutes";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reset-password" element={<ForgetPassword />} />
          <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
