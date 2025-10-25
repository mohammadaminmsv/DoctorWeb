import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Information from "../pages/Information";
import { useState } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Doctor from "../pages/Doctor";

const AppRouter = () => {
  const [test, setTest] = useState(false);
  return (
    <Router>
      <MainLayout test={test}>
        <Routes>
          <Route path="/Information" element={<Information />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Doctor" element={<Doctor />} />
        </Routes>
        <button onClick={() => setTest(!test)}>test</button>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
