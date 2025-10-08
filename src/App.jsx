import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import { Video } from "./sections/Video";
//when we using the gsap plugins we have to register them first
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Video />
    </main>
  );
}

export default App;
