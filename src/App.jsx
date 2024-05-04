import { BrowserRouter } from "react-router-dom"; // Using BrowserRouter for routing
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      {/* Container for all page components with a background setup */}
      <div className="relative z-0 bg-primary">
        {/* Section containing the Navbar and Hero components with specific background styling */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar /> 
          <Hero />
        </div>
        <About />      
        <Experience /> 
        <Works />      
        <Tech />      
        <div className="relative z-0">
          <Contact />    {/* Contact section for visitors to reach out :) */}
          <StarsCanvas />{/* The visual starry background */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
