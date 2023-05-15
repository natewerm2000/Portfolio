
import React from "react";
import "./Projects.css"
import {useCollapse} from 'react-collapsed';
import fitness from "./fitness.png"
import galactic from "./galactic.jpg"
//import lib from "./gauge.png"
import cam from "./cam.jpg"
export default function Projects(props){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return(

<div className="border">
<h2>Projects</h2>
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <div className='left'>
                <h3>
                    Galactic Conquest
                </h3>
                <img src={galactic} alt=""/>
                <br>
                </br>
                Video game created in Unreal Engine 4
                <br></br>
                C++/Blueprints
                <br></br>
                Blender
                <br></br>
                Leadership
                
            </div>
            <div className='right'>
                <h3>
                    Smart Library
                </h3>
                <img src={cam} alt=""/>
                <br>
                </br>
                SUNY New Paltz library traffic monitor
                HTML, CSS/Bootstrap, Javascript, PHP, Python, MySQL, HikVision camera/application
                <br></br>
                Javascript
                <br></br>
                React
                <br></br>
                PHP
                <br></br>
                MySQL
                <br></br>
                Java
                <br></br>
                Python
            </div>
            <div className='right'>
            
                <h3>
                    Universal Fitness
                </h3>
                <img src={fitness} alt=""/>
                <br>
                </br>
                Exercise app made in vue.js
                <br></br>
                HTML, CSS/Bulma, JavaScript, Vue.js, MongoDB
                
            </div>
            <div className='left'>
                <h3>
                    Personal Portfolio
                </h3>
                Portolio of Nathaniel Alexander
                <br></br>
                HTML, SCSS, React
            </div>
            </div>
        </div>
    </div>
    </div>
    );
}