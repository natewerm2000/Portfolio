import Portrait from "./Subpages/Portrait/Portrait"
import Education from "./Subpages/Education/Education"
import Projects from "./Subpages/Projects/Projects"
import Skills from "./Subpages/Skills/Skills"
import AboutMe from "./Subpages/About/Aboutme"
//import np from "./Subpages/Education/np.jpg"
//import dcc from "./Subpages/Education/dcc.png"
//import galactic from "./Subpages/Projects/galactic.jpg"
//import cam from "./Subpages/Projects/cam.jpg"
//import fitness from "./Subpages/Projects/fitness.png"
//import gauge from "./Subpages/Projects/gauge.png"
//import fitness1 from "./Subpages/Projects/fitnessIcon.png"
//import Aboutme from "./Subpages/About/Aboutme"
//import logo from "./Footer/logo.png"

//import Subprojects from "./Subpages/Projects/Subproject/Subproject"

//import Social from "./Subpages/Social/Social"
import "./Footer/Footer.css"

export default function Home(){
    return <div>
        
        <Portrait />
        <Skills />
        <AboutMe />
        <Projects />
        <Education />
        <div class="clear"></div>
        
  
    

    
    </div>


}