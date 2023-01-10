import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";



function App() {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/shop":
      Component = Shop
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
