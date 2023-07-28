import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useRef, useEffect,useState } from "react";
 
function App() {
  const headeRef = useRef();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    

    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
      headeRef.current.style.transform = 'translateY(-200px)';
    } else {
      headeRef.current.style.transform = 'translateY(0px)';
    }
    setPrevScrollPos(currentScrollPos);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header ref={headeRef} />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
