import React, { Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Navbar from "./component/navbar";
import Header from "./component/header";
import About from "./component/about";
import Education from "./component/education";
import Projects from "./component/projects";
import Experience from "./component/experience";
import Certifications from "./component/certifications";
import Resume from "./component/resume";
import Footer from "./component/footer";

class App extends Component{
  render() {
  return(
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Certifications />
      <Resume />
      <Footer />
    </div>
  );
  }
}
export default App;