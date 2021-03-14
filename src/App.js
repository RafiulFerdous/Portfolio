import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import { Switch, Route, Redirect} from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/ls/bootstrap.bundle";

const App = () => {
    return(
        <>
            <switch>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to ="/"/>


            </switch>
            
        </>
        
        );
};
export default App;