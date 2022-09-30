import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Footer";
import Header from "./Header";
import {BiUpArrow} from 'react-icons/bi'

const Base = (props) => {
  return (
    <>
      
      <ScrollToTop className="scroll"
        component={<img src="https://safemoon.com/img/top.svg" alt=""/>}
      />

      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Base;
