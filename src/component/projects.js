import React from 'react'

const projects = () => {
    return (
        <div className="projects-section" id="projects">
        <h1>Featured Projects</h1>
        <div className="row animate__animated animate__fadeInLeft">
        <div className="col-md-2">

        </div>
            <div className="col-md-4">
                <h3>Weather App</h3>
                <p>Utilized OpenWeather API to create a web application using create-react-app that takes user input of city in the world and outputs current, high, and low temperatures.</p>
            </div>
            <div className="col-md-4 animate__animated animate__fadeInLeft">
                <h3>To Do List App</h3>
                <p>Utilized a modern front-end pipeline to create basic web application.</p>
            </div>
        </div>

        <div className="row">
        <div className="col-md-2">

        </div>
            <div className="col-md-4 animate__animated animate__fadeInRight">
                <h3>Portfolio Website</h3>
                <p>Utilizing Node.js, create-react-app, Bootstrap, Animate.css, and more, I created a portfolio website that lists my expeirence and what skills I could offer future employers.</p>
            </div>
            <div className="col-md-2">

            </div>
        </div>
        <div className="row">
        <div className="col-md-2">

        </div>

            <div className="col-md-2">

            </div>
        </div>

    </div>
    )
}

export default projects
