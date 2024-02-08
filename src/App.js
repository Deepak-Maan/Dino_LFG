import "./App.css";
import About from "./components/About";
import Backtotop from "./components/BackToTop";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Nav";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Utility from "./components/Utilities";

function App() {
  return (
    <div>
      <div className="bg-header xl:bg-Bgsize bg-cover bg-no-repeat">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Tokenomics />
      <Utility />
      <Roadmap />
      <Faq />
      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;
