import React, { Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Navbar from "./component/navbar";
import Header from "./component/header";
import About from "./component/about";
import Education from "./component/education";
import Experience from "./component/experience";
import Certifications from "./component/certifications";

class App extends Component{
  render() {
  return(
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Certifications />
    </div>
  );
  }
}
export default App;