import React, { Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Navbar from "./component/navbar";
import Header from "./component/header";



class App extends Component{
  render() {
  return(
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
  }
}
export default App;