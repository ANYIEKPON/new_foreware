import About from "@/components/About-us";
import Contact from "@/components/Contact";
import Different from "@/components/Different";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sponsors from "@/components/Sponsors";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <div id="services">
        <Services />
      </div>
      <Different />
      <Sponsors />
      <Contact />
    </main>
  );
};

export default page;
