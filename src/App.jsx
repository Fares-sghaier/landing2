import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import styles from "./style";
//Components
import Navbar from "./components/Navbarr/TopNavbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Contracts from "./pages/Contracts/Contracts";
import Contact from "./pages/Contactus/Contactus";
import Team from "./pages/Team/Team";
import Term from "./pages/Terms/TermandCondition";
import Privacy from "./pages/Privacy/Privacy";

function ScrollToTop() {
 
}

const App = () => (
  <div>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/term" element={<Term />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
    <div className={`bg-gray-900 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export const NotFound = () => {
  return (
    <div>
      <h1> 404 page not found </h1>{" "}
    </div>
  );
};

export default App;
