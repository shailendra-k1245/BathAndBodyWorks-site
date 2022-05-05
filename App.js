import logo from './logo.svg';
import './App.css';
import { Homepage } from "./components/homepage";
 import {Link} from "react-router-dom";
import { Bodycare } from "./components/Bodycare.js";
import { Gifts } from "./components/Gifts.js";
import { Handsoap } from "./components/Handsoap.js";
import { Homefragrance } from "./components/Homefragrance.js";
import {Routes,Route} from "react-router-dom";
import {BsBag} from "react-icons/bs"



function App() {
  return (
    <div className="App">
      <div className = "App1">
       <div className = "t">Bath & Body Works </div>
       
       <input className = "s" placeholder = "Search by Fragrance or product....   	"></input>
       <img className = "i" src = "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc807e833/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"></img>
       <div className = "b11"><BsBag/></div>
     </div>
  
    
 <div className = "l"> <Link to= "/"  className = "App2"><select><option>NEW & NOW</option></select>
</Link>
            <Link to= "/a" className = "App2">BODY CARE</Link>
            <Link to = "/b" className = "App2">HAND SOAPS & SANITIZERS</Link>
            <Link to= "/c" className = "App2">HOME FRAGRANCE</Link> 
            <Link to= "/c" className = "App2">GIFTS</Link> 
            <Link to= "/c" className = "App2">TOP OFFERS</Link> 
            
        </div>    
     <Routes>
      <Route path = "/"  element  = {<Bodycare/>}></Route>
      <Route path= "/a" element  = {<Gifts/>}></Route>
      <Route path = "/b" element = {<Handsoap/>}></Route>
      <Route path = "/c" element = {<Homefragrance/>}></Route>
    
     
    </Routes> 
    <Homepage></Homepage>
      
    </div>
  );
}

export default App;
