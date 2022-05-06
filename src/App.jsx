import "./App.css";
import { Homepage } from "./components/HomePage";
import { Link } from "react-router-dom";

import { Routes, Route, useLocation } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { BodyCare } from "./components/BodyCare";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="App1">
        <div className="t">Bath & Body Works </div>

        <input
          className="s"
          placeholder="Search by Fragrance or product....   	"
        ></input>
        <img
          className="i"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc807e833/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
        ></img>
        <div className="b11">
          <BsBag />
        </div>
      </div>

      <div className="l">
        {" "}
        <Link to="/newandnow" className="App2">
          NEW & NOW
        </Link>
        <Link to="/bodycare" className="App2">
          BODY CARE
        </Link>
        <Link to="/soaps" className="App2">
          HAND SOAPS & SANITIZERS
        </Link>
        <Link to="/fragrance" className="App2">
          HOME FRAGRANCE
        </Link>
        <Link to="/gifts" className="App2">
          GIFTS
        </Link>
        <Link to="/top-offers" className="App2">
          TOP OFFERS
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/bodycare" element={<BodyCare />}></Route>
      </Routes>

      {location.pathname === "/" ? <Homepage /> : ""}
    </div>
  );
}

export default App;
