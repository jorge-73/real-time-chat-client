import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { useAuth } from "../contexts/AuthContext";

const Router = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <main className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={user ? <Navigate to={"/"}/> : <Login />} />
          <Route path="/register" element={user ? <Navigate to={"/"}/> : <Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
