
import React from "react";
import "./Projects.css"
import fitness from "./fitness.png"
import galactic from "./galactic.jpg"
import logo from "./logo.png"
//import lib from "./gauge.png"
import cam from "./cam.jpg"
export default function Projects(props){
   

    return(

<div className="border">
<h2>Projects</h2>
    
            <div className="content">
            <div className='left'>
                <h3>
                    Galactic Conquest
                </h3>
                <a href="https://www.youtube.com/watch?v=gXRVlogzmfA" target="_blank" rel="noreferrer">

                <img  className = "subpic" src={galactic} alt=""/>
                </a>
                <br>
                </br>
                Video game created in Unreal Engine 4
                <br></br>
                C++, Blueprints, Blender
                
                
            </div>
            <div className='right'>
                <h3>
                    
                    Smart Library
                </h3>
                

                <img className = "subpic"src={cam} alt=""/>
                
                <br>
                </br>
                SUNY New Paltz library traffic monitor
                <br></br>
                Javascript, React, PHP, MySQL, Java, Python, HikVision Hardware and Software
                
            </div>
            <div className='right'>
            
                <h3>
                    Universal Fitness
                </h3>
                <a href="https://github.com/natewerm2000/ExerciseApp" target="_blank" rel="noreferrer">
                <img className = "subpic"src={fitness} alt=""/>
                </a>
                <br>
                </br>
                Exercise app made in Vue.js
                <br></br>
                HTML, CSS/Bulma, JavaScript, Vue.js, MongoDB
                
            </div>
            <div className='left'>
                <h3>
                    Personal Portfolio
                </h3>
                <img className = "subpic" src={logo} alt=""/>
                <br>
                </br>
                Portolio of Nathaniel Alexander
                <br></br>
                HTML, SCSS, React
            </div>
            </div>
        </div>
   
    );
}