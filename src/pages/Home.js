
import portrait from '../images/portait.jpg';
import '../style2.scss';



export default function Home(){
    return <div className = "shop">
<div id = "header"></div>
    <div class="card">
        <img src={portrait} alt=""/>
            <div class="innerCard1">
            <h1><b>Nathaniel Alexander</b></h1> 
            <p>Software Developer</p>
            <p>Web Developer</p>
            <div id = "space"></div>
            </div>
            <div class="innerCard1">
            <h4>Education</h4> 
            <p><b>Dutchess Community College:</b></p>
            <p>2018 - 2020</p>
            <p>Associate of Science: Computer Science</p>
            <p><b>State University of New York, New Paltz:</b></p>
            <p>2020 - 2022</p>
            <p>Bachelor's in Computer Science</p>
            <div id = "space"></div>
            </div>
            <div class="innerCard1">
            <h4><b>Skills</b></h4> 
            <p><b>Proficient in:</b></p>
            <p>Java, Python, JavaScript, MySQL, JQuery, HTML5, CSS3, PHP</p>
            <p><b>Competent in:</b></p>
            <p>Vue.js, React.js, MongoDB, C++</p>
            <div id = "space"></div>
            </div>
            <div class="innerCard1">
            <h4><b>Projects</b></h4> 
            <p>Smart Library</p>
            <p>Universal Fitness</p>
            <p>Galactic Conquest</p>
            <div id = "space"></div>
            </div>
            <div class="innerCard1">
            <h4><b>Work Experience</b></h4> 
            <p><b>Just A Buck:</b></p>
            <p>Cashier</p>
            <p>2018-2021</p>
            <p><b>Just A Buck:</b></p>
            <p>Key Holder</p>
            <p>2021-Present</p>
            <p><b>Joann Fabric:</b></p>
            <p>Key Holder</p>
            <p>2022-Present</p>
            <div id = "space"></div>
            </div>
            <div id = "space"></div>
        
    </div>
    <div id = "linkbox">
        Links:
        <div class="innerCard2">
        <a href="https://github.com/natewerm2000"target="_blank"rel="noreferrer"><h1><b>Github</b></h1> 
            </a>
            <a href="https://www.linkedin.com/in/nathaniel-alexander-934188196/"target="_blank"rel="noreferrer"><h1><b>LinkedIn</b></h1> 
            </a>
            <a href="https://www.youtube.com/watch?v=gXRVlogzmfA"target="_blank"rel="noreferrer"><h1><b>Galactic Conquest DEMO</b></h1> 
            </a>
            <div id = "space"></div>
            </div>
    </div>

    
    
</div>
}