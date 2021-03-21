import React from 'react';
import Resume from '../Current_Resume.pdf';
import CV from '../Curriculum Vita.pdf';

const resume = () => {
    return (
        <div className="resume-section" id="resume">
          <h1>Resume/CV</h1>
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-4">
                    <h3>Resume</h3>
                    <p><a href={Resume}>Click here</a> to see my resume.</p>
                </div>
                <div className="col-md-4">
                    <h3>Psychology Curriculum Vita</h3>
                    <p><a href={CV}>Click here</a> to see my CV.</p>
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    )
}

export default resume
