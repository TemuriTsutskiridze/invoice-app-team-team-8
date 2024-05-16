import "./App.css";
import Header from "./components/Header";
import GoBack from "./components/GoBack";
import AddInvoce from "./pages/AddInvoce";
function App() {
  return (
    <>
      <Header />
      <div className="px-[24px] mt-[33px]">
        <GoBack />
        <AddInvoce />
      </div>
    </>
  );
}

export default App;
