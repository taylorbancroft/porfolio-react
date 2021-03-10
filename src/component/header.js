import React from "react";
import Typed from "react-typed";
import Portrait from "../portrait.png";
const header = () => {
    return (
        <div class="container">
        <div className="header-wrapper row">
            <div className="portrait col-md-6 animate__animated animate__fadeInLeft">
                <img src={Portrait} />
            </div>
            <div className="main-info col-md-6 animate__animated animate__fadeIn">
                <h1>Taylor Bancroft</h1>
                <Typed 
                className = "typed-text"
                strings={["Web Design", "Web Development", "React Developer"]}
                typeSpeed = {40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
        </div>
    )
}

export default header
