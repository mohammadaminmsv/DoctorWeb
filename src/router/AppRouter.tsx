import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Information from "../pages/Information";
import { useState } from "react";

const AppRouter = () => {
  const [test, setTest] = useState(false);
  return (
    <Router>
      <button onClick={() => setTest(!test)}>test</button>
      <MainLayout test={test}>
        <Routes>
          <Route path="/information" element={<Information />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
