import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand logo" href="#">InstaBill</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="menu-item">
                    <ul className="navbar-nav mr-auto">
                    <Link to="howItWorks" spy={true} smooth={true} offset={-70} duration={500}>
                        <li className="nav-item ">
                            <a className="nav-link">How It Works</a>
                        </li>
                    </Link>
                    <Link to="testimonials" spy={true} smooth={true} offset={-70} duration={700}>
                        <li className="nav-item ">
                            <a className="nav-link" >Testimonials</a>
                        </li>
                    </Link>
                    <Link to="signUpForm" spy={true} smooth={true} offset={-70} duration={1000}>
                    <li className="nav-item ">
                        <a className="nav-link">SignUp</a>
                    </li>
                    </Link>
                    <li className="nav-item">
                        <a className="nav-link">SignIn <span className="sr-only">(current)</span></a>
                    </li>
                    
                    
                    
                    </ul>
                    </div>
                </div>
                </nav>
        </React.Fragment>
    );
}

export default Navbar;