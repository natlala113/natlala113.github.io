import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Hero />
      <About />
      <Project />
    </Router>
  );
}

export default App;
