import Portrait from "./Subpages/Portrait/Portrait"
import Education from "./Subpages/Education/Education"
import Projects from "./Subpages/Projects/Projects"
import np from "./Subpages/Education/np.jpg"
import dcc from "./Subpages/Education/dcc.png"
import galactic from "./Subpages/Projects/galactic.jpg"
import cam from "./Subpages/Projects/cam.jpg"
import fitness from "./Subpages/Projects/fitness.png"
import gauge from "./Subpages/Projects/gauge.png"
import fitness1 from "./Subpages/Projects/fitnessIcon.png"
import Aboutme from "./Subpages/About/Aboutme"
//import Subprojects from "./Subpages/Projects/Subproject/Subproject"

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
        gpa = "3.03 GPA"/>




        <h1>Projects</h1>


        <Projects 
        srcLink = "https://github.com/zangaran1/GalacticConquestProject"
        img = {galactic} 
        name = "Galactic Conquest"
        comp = "Unreal Engine 4, Blueprints/C++, Blender"
        desc = "Third Person Shooter, Waved based survival"
        linkVid = "gXRVlogzmfA"
        vid = {1}
        />

        <Projects 
        srcLink = "https://docs.google.com/presentation/d/1xH4ANnITBwhVfJL67de5hD4MwMIRGlsX/edit?usp=sharing&ouid=111152142329312447306&rtpof=true&sd=true"
        img = {cam} 
        name = "SUNY New Paltz Traffic Camera"
        comp = "HTML, CSS, PHP, JS, MySQL,"
        desc = "People counting camera data and interface for library staff and students"
        vid = {0}
        about1 = "Ongoing project at SUNY New Paltz from previous semesters students"
        about2 = "The Schools Library requires an accessible application with low required maintenance"
        about3 = "Provide accurate data and predictions of past library traffic data to staff and students"
        pic1 = {gauge}
        />

        <Projects 
        srcLink = "https://github.com/natewerm2000/ExerciseApp"
        img = {fitness} 
        name = "Universal Fitness"
        comp = "HTML, CSS, JS, Bulma, Vue.js, MongoDB"
        desc = "Fitness App, users can login, upload workouts, post on feed, view feed of other friends and add friends"
        vid = {0}
        about1 = "Course project for Web Server Programming Fall 2021"
        about2 = "This Exercise App contains general information about nutrition and fitness with a social component to it"
        about3 = "This app contains profile management, data on users, static pages for general information, and a feed of your posts and those posts of who you follow"
        pic1 = {fitness1}
        />
        <h1>About me</h1>
        <Aboutme/>
  
    

    
    </div>


}