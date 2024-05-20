import "./App.css";

import Header from "./components/Header";
import GoBack from "./components/GoBack";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";
import Moon from "/assets/icon-moon.svg";
import Sun from "/assets/icon-sun.svg";
import Invoice from "./pages/Invoice";
import { Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function setMode() {
    setDarkMode(!darkMode);
  }
  return (
      <div className={darkMode ? "bg-[#141625]" : "bg-white"}>
    
      <div className={`lg:flex`}>
        <Header darkMode={darkMode} setMode={setMode} />
        <div className="px-[24px] mt-[33px] pb-[22px] sm:pb-[32px] lg:ml-[100px] sm:w-[616px]">
          <GoBack darkMode={darkMode} />
          <AddInvoice darkMode={darkMode} />
          <EditInvoice darkMode={darkMode} />
            <div/>
      )
   
}
  





export default App;
