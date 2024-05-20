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
    <div className={darkMode ? "bg-[#141625]" : ""}>
      <div className={`lg:flex  `}>
        <Header darkMode={darkMode} setMode={setMode} />
        <div className="px-[24px] mt-[33px] pb-[22px] sm:pb-[32px] ">
          <GoBack darkMode={darkMode} />
          <AddInvoice darkMode={darkMode} />
        </div>

        {/* <EditInvoice darkMode={darkMode} /> */}
      </div>
    </div>
  );
}

export default App;
