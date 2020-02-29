import React, { Component } from "react";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import SignUp from "./SignUp";
import Footer from "./Footer";
import InvoiceMaker1 from "../Images/InvoiceMaker1.png";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import scrollUp2 from "../Images/scrollUp2.png";
import { IoIosArrowDropup } from "react-icons/io";
import { IconContext } from 'react-icons';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div className=" section1">
          <Navbar />
        <div className="row">
          <div className="col col-lg-5 head-text">
            <p>Get Free Digital Invoices in One Click</p>
            <Link to={"/free-invoice"}>
              <button type="button" class="btn btn-warning btn-lg get-started-button">
                Get Started
              </button>
            </Link>
          </div>

          <div className="col ">
            <img src={InvoiceMaker1} id="invoice-maker" alt="invoice-maker" />
          </div>

          </div>
        </div>

        <WhatWeDo />

        <Testimonials />

        <SignUp />

        <Footer />

        <ScrollToTop showUnder={0} duration={1000} >
    <button>
      <IconContext.Provider value={{ background: "transparent", border: "none", className: "global-class-name" }}>
        <IoIosArrowDropup className="scroll-up-icon"/>
        </IconContext.Provider>
    </button>
</ScrollToTop>
        
      </React.Fragment>
    );
  }
}

export default Home;
