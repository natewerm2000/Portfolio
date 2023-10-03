import np from "./np.jpg"
import dcc from "./dcc.png"
import React from "react";


export default function Education(props){

    return(

<div className="border">
<h2>Education</h2>
    
        
            <div className="content">
            <div className='left'>
                <h3>
                    SUNY New Paltz
                </h3>
                <img className = "subpic" src={np} alt="new paltz"/>
                <br>
                </br>
                Bachelor of Science
                <br></br>
                Majoring in Computer Science
                <br></br>
                2021-2022
                <br></br>
                3.67 GPA
                
            </div>
            <div className='right'>
                <h3>
                    Dutchess Community College
                </h3>
                <img className = "subpic"src={dcc} alt="dcc"/>
                <br>
                </br>
                Associate Of Science
                <br></br>
                Majoring in Computer Science
                <br></br>
                2018-2020
                <br></br>
                3.03 GPA
                
            </div>
            
            </div>
            <section class="my-work" id="work">
            <h2 class="section__title section__title--work">Mdwdwy work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div class="portfolio">
                
            </div>
        </section>
        </div>
  
    );
}