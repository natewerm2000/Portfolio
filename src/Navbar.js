//import companyLogo from './images/logo.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook} from '@fortawesome/free-brands-svg-icons'
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
//import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Pdf from "./images/resume.pdf";

export default function Navbar(){
    return <nav className = "nav">
        
        <div class="container">
            
            <a href="/home">
            <button class="button">
	                    Nathaniel Alexander
	                <div class="button__horizontal"></div>
	            <div class="button__vertical"></div>
            </button> 
            </a>
            <div id = "space"></div>
        </div>
        
        <ul>
            
            
            
        <div class="container">
            
            <a href={Pdf} target = "_blank"rel="noreferrer">
            <button class="button">
	                    Resume
	                
	            <div class="button__vertical"></div>
            </button> 
            </a>
            <div id = "space"></div>
        </div>
        <div class="container">
            
            <a href="/contact">
                
            <button class="button">
	                    Contact
	                
	            <div class="button__vertical"></div>
            </button> 
            </a>
            <div id = "space"></div>
        </div>
        </ul>
    </nav>
}