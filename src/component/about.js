import React from "react";
import Icon from "../icon.png";
const about = () => {
    return (
            <div className="container about-section" id="aboutMe">
            <div className="row">
            <div className="aboutMe col-md-8 animate__animated animate__fadeIn animate__slower">
            <h1>bio</h1>
                <div className="col-md animate__animated animate__fadeIn animate__slower">            
                <p>Taylor is a web developer with a range of
            both coding skills from her degree in computer
            science and psychological knowledge from her degree
            in psychology from NC State University. She aims to
            merge her technical skills with her passion for 
            helping marginalized and disabled communities to make
            user centric web applications with accessibility 
            and interface design a priority. While studying
            computer science, she also taught herself React and 
            enrolled in a training program for Amazon Web Services
            to strengthen her back end cloud computing skills. She 
            believes that anyone can learn to code, and has made it a 
            goal to blog about her learning process at <a href="hackanegg.com">hackanegg.com</a></p>
            </div>
        </div>
        <div className ="col-md-4 animate__animated animate__rotateInDownLeft">
            <img src={Icon} />
        </div>
        </div>
    </div>
    )
}

export default about
