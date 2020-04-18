import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={About}></Route>
    </HashRouter>
  );
}

export default App;
