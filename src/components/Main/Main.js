import React from "react";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import NavigationBar from "../NavBar/NavBar";

const Main = () => {
  return (
    <>
        <Promo />
        <NavigationBar />
        <AboutProject />
         <Techs />
       <AboutMe />
        <Portfolio />
    </>
  );
};

export default Main;
