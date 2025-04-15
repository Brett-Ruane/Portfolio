import Header from "./components/Header";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Bio from "./components/Bio";
import Projects from "./components/Project";
import HyperspaceTunnel from "./components/HyperspaceTunnel";

function App() {
  return (
    <>
      <HyperspaceTunnel />
      <Header />
      <Bio />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
