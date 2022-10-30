import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Router>
        <Route element={<Home />} path="/" />
      </Router>
    </>
  );
}

export default App;
