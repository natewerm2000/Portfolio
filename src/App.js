import Navbar from "./Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import './style2.scss';



function App() {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/contact":
        Component = Contact
        break
    default:
      Component = Home
      break
  }
  return (
    <>
      <Navbar />
      <Component />
  </>
  )
}

export default App;
