import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./website/About";
import Contact from "./website/Contact";
import Experience from "./website/Experience";
import Home from "./website/Home";
import Work from "./website/Work";

function App() {
   
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
