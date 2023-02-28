import Portrait from "./Subpages/Portrait/Portrait"
import Education from "./Subpages/Education/Education"
import Projects from "./Subpages/Projects/Projects"
import np from "./Subpages/Education/np.jpg"
import dcc from "./Subpages/Education/dcc.png"
import galactic from "./Subpages/Projects/galactic.jpg"
import cam from "./Subpages/Projects/cam.jpg"
import fitness from "./Subpages/Projects/fitness.png"
//import Social from "./Subpages/Social/Social"
import "./Footer/Footer.css"

export default function Home(){
    return <div>
        
        <Portrait />
        
        <h1>Education</h1>
        <Education
        img = {np} 
        school = "SUNY New Paltz"
        year = "2021 - 2022"
        deg = "Bachelor's in Science: Computer Science"
        gpa = "3.67 GPA"/>
        <Education
        img = {dcc} 
        school = "Dutchess Community College"
        year = "2018 - 2020"
        deg = "Associate's in Science: Computer Science"
        gpa = "3.4 GPA"/>
        <h1>Projects</h1>
        <Projects 
        srcLink = "https://github.com/zangaran1/GalacticConquestProject"
        img = {galactic} 
        name = "Galactic Conquest"
        comp = "Unreal Engine 4, Blueprints/C++, Blender"
        desc = "Third Person Shooter, Waved based survival"/>
        <Projects 
        srcLink = "https://docs.google.com/presentation/d/1xH4ANnITBwhVfJL67de5hD4MwMIRGlsX/edit?usp=sharing&ouid=111152142329312447306&rtpof=true&sd=true"
        img = {cam} 
        name = "SUNY New Paltz Traffic Camera"
        comp = "HTML, CSS, PHP, JS, MySQL,"
        desc = "People counting camera data and interface for library staff and students"/>
        <Projects 
        srcLink = "https://github.com/natewerm2000/ExerciseApp"
        img = {fitness} 
        name = "Universal Fitness"
        comp = "HTML, CSS, JS, Bulma, Vue.js, MongoDB"
        desc = "Fitness App, users can login, upload workouts, post on feed, view feed of other friends and add friends"/>
        
  
    

    
    </div>


}