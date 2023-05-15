import { useState } from "react";

//import companyLogo from './images/logo.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook} from '@fortawesome/free-brands-svg-icons'
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
//import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Pdf from "./images/resume.pdf";

export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
          
            
            <a href="/home" className="brand-name">
            <button className="button">
	                    Nathaniel Alexander
	                
            </button> 
            </a>
            
        
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}
          >
            {<svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>}
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
            <li>
              <a href="/home">
            <button className="button">
	                    Contact
            </button> 
            </a>
              </li>
              <li>
              <a href="/home">
            <button className="button">
	                    About
            </button> 
            </a>
              </li>
              <li>
              
            
            <a href={Pdf} target = "_blank"rel="noreferrer">
            <button className="button">
	                    Resume
            </button> 
            </a>
            
            
              </li>
            </ul>
          </div>
        </nav>
      );
    }