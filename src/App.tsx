import HeaderComp from "./components/HeaderComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from "./components/PostComp";
import Contact from "./components/ContactComp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FooterComp from "./components/FooterComp";
export default function App(){
return(<>
<Router>
<HeaderComp/>
<Route path="/posts">
    <Posts/>
</Route>
<Route exact path="/contact">
    <Contact/>
</Route>
<FooterComp/>
</Router>
</>)
    }   


