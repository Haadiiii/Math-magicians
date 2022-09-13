import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Quote from "./pages/Quote";
import Navbar from "./Components/Navbar";
import "./App.css";
import CalculatorPage from "./pages/CalculatorPage";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
