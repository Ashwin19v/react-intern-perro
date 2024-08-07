import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import Compare from "./components/Compare";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details" element={<Details />}></Route>
            <Route path="/compare" element={<Compare />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
