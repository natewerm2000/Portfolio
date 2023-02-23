import {  FaGithub, FaLinkedin } from 'react-icons/fa';
import './Social.css';
import { FaCode } from 'react-icons/fa';

export default function Portrait(){
    return(
        <nav className = "nav">
           <a href={"https://www.linkedin.com/in/nathaniel-alexander-934188196/"}> 
        <FaLinkedin color =  "#e55743"/>
        </a>
        
        <FaCode color =  "#e55743"className="spinner" />
        
        <a href={"https://github.com/natewerm2000"}> 
        <FaGithub color =  "#e55743" />
        </a>
            
    </nav>
    )
}