import React from "react";
import Typed from "react-typed";
import Header from "../Components/Header";
import Particles from "react-particles-js";

const Home = () => {
    return(
        <>


<Particles 
          params={{
            particles: {
              number:{
                value: 30,
                density:{
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00"
                }
              }

            }
          }}
    
    />

<div className="header-wraper">

<div className= "main-info">
    <h1>I am Rafiul Ferdous</h1>
    <Typed 

        className="typed-text"
        strings={["web design", "development", "lots of things"]}
        typeSpeed={40}
        backSpeed={60}
        loop
    />
    <a href="#" className={"btn-main-offer"}>Contact me</a>

    
</div>
    
</div>


        </>
           
        
        
        );
};
export default Home;