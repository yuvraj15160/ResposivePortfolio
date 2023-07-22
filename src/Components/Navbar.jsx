import React from "react";

import './Navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name">Yuvraj</div>
               

            </div>
            <div className="n-right">
                <div className="n-list" >
                    <ul style={{ listStyleType: "none" }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Sevices' smooth={true} >
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Work' smooth={true} >
                            <li>Work</li>
                        </Link>
                        <Link spy={true} to='Porfolio' smooth={true} >
                            <li>Porfolio</li>
                        </Link>

                    </ul>
                </div>
                <button className="button  n-button">
                    Contact
                </button>



            </div>
        </div>
    );
};

export default Navbar;
