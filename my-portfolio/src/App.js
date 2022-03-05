import React, { Component } from "react";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Resume from "./components/resume";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Skills from "./components/skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Resume></Resume>
        <Blog></Blog>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
