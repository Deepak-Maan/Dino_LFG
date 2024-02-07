import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Nav";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div>
      <div className="bg-header xl:bg-Bgsize bg-cover bg-no-repeat">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
