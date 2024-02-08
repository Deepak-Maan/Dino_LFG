import { useEffect, useState } from "react";
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
import Preloader from "./components/Preloader";

function App() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
