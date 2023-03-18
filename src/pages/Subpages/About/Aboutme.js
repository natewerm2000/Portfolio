import React, { useState } from "react";
import portrait from "./portrait.JPG"
import xc from './xc.png'
import grad from './grad.JPG'
import ReactCardFlip from "react-card-flip";

import './Aboutme.css'
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default function Aboutme(){
    const [flip, setFlip] = useState(false);
    return (
        <div>
            <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
            <div style={{
                minHeight:'600px',
                fontSize: '40px',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                
                <button style={{
                    width: '200px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Show About Me</button>
            </div>
            
            <div style={{
                minHeight:'600px',
                fontSize: '40px',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                <button style={{
                    width: '200px',
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                    Hide About Me</button>
                <div className="about">

<img className = "abtImg" src={[portrait]} alt = ""/>
<div className="abtTxt">Hi, my name is Nathaniel Alexander. As of todays date, I am {calculate_age(new Date(2000, 8, 9))} years old.
I was born and raised in Poughkeepsie, New York.
    </div>
        <div className="abtTxt">Hobbies of mine include running, video games and an overall interest in technology.
    </div>

    
    
</div>

<div className="about">


    <img className = "abtImg" src={[xc]} alt = ""/>
    <div className="abtTxt">
        In my highschool years I ran track and cross country from my freshman to senior year. Leading to several personal achievements
        in my life such as running my first half marathon in 2018.
    </div>
    
</div>
<div className="about">


<img className = "abtImg" src={[grad]} alt = ""/>
<div className="abtTxt">
    After Graduating from Spackenkill High School in 2018, I immediately attended Dutchess Community College majoring in Computer Science.
    With only a bit of experience with HTML and CSS, I did not know what to expect when approaching this field.
</div>


</div>
<div className="about">

<div className="abtTxt">
    At DCC, I was introduced to my first real programming language, Java. Which was definitely a rude awakening, but overtime this intimidating journey has become a lot easier and have grown fond of this field.
</div>       
</div>
<div className="about">

<div className="abtTxt">
After graduating with my Associate's Degree from Dutchess, I then transferred to SUNY New Paltz for my Bachelor's Degree which was achieved in Fall 2022.</div>       
</div>
                
            </div>
        </ReactCardFlip>
        
            
                </div>
                
        
    )
}