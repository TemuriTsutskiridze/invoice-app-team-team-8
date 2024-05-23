import "./App.css";
import Header from "./Components/Header";
import GoBack from "./Components/GoBack";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";
import Moon from "/assets/icon-moon.svg";
import Sun from "/assets/icon-sun.svg";
import { Route, Routes } from "react-router-dom";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoice";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function setMode() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <div className="z-[999]">
        <Header darkMode={darkMode} setMode={setMode} />
      </div>

      <div className={darkMode ? "bg-[#141625]" : "bg-white"}>
        <div className={`lg:flex `}>
          <div className="lg:ml-[30%]">
            <Routes>
              <Route path="/" element={<Invoices darkMode={darkMode} />} />
              <Route path="/invoices/:id" element={<Invoice />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
