import "./App.css";
import Header from "./components/Header";
import GoBack from "./components/GoBack";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";
import Moon from "/assets/icon-moon.svg";
import Sun from "/assets/icon-sun.svg";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function setMode() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <Header darkMode={darkMode} setMode={setMode} />
      <div className="px-[24px] mt-[33px] pb-[22px] sm:pb-[32px]">
        <GoBack />
        <AddInvoice />
        <EditInvoice />
      </div>
    </>
  );
}

export default App;
