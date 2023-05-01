import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import { FaAccessibleIcon } from "react-icons/fa";
import ".";
import "./App.css";

function App() {
  return (
    <div className="page-wrap">
      <Header />
      <Main />
      <Sidebar />
      <div>{FaAccessibleIcon}</div>
    </div>
  );
}

export default App;
