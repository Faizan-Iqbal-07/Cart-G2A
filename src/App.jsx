import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Slides from "./components/Slides";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="px-[3%] lg:px-[7%]  w-full">
       
          <Section />
          <Slides  />
          <Footer />
    
      </section>
    </div>



  );
};

export default App;
