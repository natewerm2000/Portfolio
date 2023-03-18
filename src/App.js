import Navbar from "./Navbar";
//import Contact from "./pages/Contact";
import Home from "./pages/Home";
import './style2.scss';
import Footer from "./pages/Footer/Footer";
import './style.css'




function App() {



 



  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    
    default:
      Component = Home
      break
  }
  return (
    <>
    <div className="content-container"> 
    <body>
      <Navbar />
      <Component />
      </body>
      </div>
      <Footer />
  </>
  )
}

export default App;
