//import companyLogo from './images/logo.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook} from '@fortawesome/free-brands-svg-icons'
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
//import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Pdf from "./images/resume.pdf";

export default function Navbar(){
    return <nav className = "nav">
        
        <div className="container">
            
            <a href="/home">
            <button className="button">
	                    Nathaniel Alexander
	                <div className="button__horizontal"></div>
	            <div className="button__vertical"></div>
            </button> 
            </a>
            <div id = "space"></div>
        </div>
        
        <ul>
            
            
            
        <div className="container">
            
            <a href={Pdf} target = "_blank"rel="noreferrer">
            <button className="button">
	                    Resume
	                
	            <div className="button__vertical"></div>
            </button> 
            </a>
            <div id = "space"></div>
        </div>
        
        </ul>
    </nav>
}