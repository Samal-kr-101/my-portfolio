import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
export const Navbar = () => {

  const [menu, setMenu] = useState("menu");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }
  
  return (
    <nav className="navbar">
      {/* <img src="/portfo.png" alt="logo"/> */}
      <a href="#hero"><h2>Portfolio.</h2></a>
      <img src="./menu-icon.svg" alt="" onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src="./close-menu.svg" alt="" onClick={closeMenu} className="nav-mob-close" />
        <li><Link to= "hero" className="link" smooth={true} duration={500}><p onClick={() => ("hero")}>Home</p></Link></li>
        <li><Link to="about" className="link" smooth={true} duration={500}><p onClick={() => ("about")}>About me</p></Link></li>
        {/* <li>Services</li> */}
        <li><Link to="project" className="link" smooth={true} duration={500}><p onClick={() => ("project")}>Project</p></Link></li>
        <li><Link to="contact" className="link" smooth={true} duration={500} href='#'><p onClick={() => ("contact")}>Contact</p></Link></li>
      </ul>
      {/* <button className="navbarBtn">Contact Me</button> */}
      <button className="navbarBtn"><a href="#contact" className="btn">Contact Me</a></button>
    </nav>
  );
};
 /*
 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
 */
