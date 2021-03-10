import React, { Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar";



class App extends Component{
  render() {
  return(
    <div className="App">
      <Navbar />
    </div>
  );
  }
}
export default App;