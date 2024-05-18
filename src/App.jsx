import "./App.css";
import Invoice from "./pages/Invoice";
import { Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Invoices />} />
      <Route path="/invoices/:id" element={<Invoice />} />
    </Routes>
  );
}

export default App;
