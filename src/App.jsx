import "./App.css";
import Header from "./components/Header";
import GoBack from "./components/GoBack";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";
function App() {
  return (
    <>
      <Header />
      <div className="px-[24px] mt-[33px] pb-[22px] sm:pb-[32px]">
        <GoBack />
        <AddInvoice />
        <EditInvoice />
      </div>
    </>
  );
}

export default App;
