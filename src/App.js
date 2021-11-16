import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import "./index.css";

import Introduction from "./components/Introduction/Introduction";
import Header from "./components/Navigation/Header";
import Skills from "./components/Skills/Skills";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import WhatIsReactBlog from "./pages/WhatIsReactBlog";
import ProgrammingFutureBlog from "./pages/ProgrammingFutureBlog";
import FrontendToolsBlog from "./pages/FrontendToolsBlog";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const App = () => {
  const introRef = useRef();
  const skillsRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();
  const serviceRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigateToIntroduction = () => {
    introRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigateToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigateToServices = () => {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigateToBlog = () => {
    blogRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigateToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              goToIntro={navigateToIntroduction}
              goToSkills={navigateToSkills}
              goToServices={navigateToServices}
              goToBlog={navigateToBlog}
              goToContact={navigateToContact}
            />
            <Introduction ref={introRef} goToContact={navigateToContact} />
            <Services ref={serviceRef} />
            <Skills ref={skillsRef} />
            <Blog ref={blogRef} />
            <Contact ref={contactRef} />
            <Footer
              goToContact={navigateToContact}
              goToIntro={navigateToIntroduction}
            />
          </>
        }
      />
      <Route path="/blog-whatIsReact" element={<WhatIsReactBlog />} />
      <Route
        path="/blog-programmingFuture"
        element={<ProgrammingFutureBlog />}
      />
      <Route path="/blog-frontendTools" element={<FrontendToolsBlog />} />
    </Routes>
  );
};

export default App;
