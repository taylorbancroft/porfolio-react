import React from "react";
import logo from "../logo.png";
//REACT FONTAESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a className ="navbar-brand" href="#"><img src={logo} alt="logo" className="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faChevronDown}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#aboutMe">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#education">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#certifications">Certifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#resume">Resume/CV</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default navbar
