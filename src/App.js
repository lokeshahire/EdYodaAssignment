import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Payment from "./components/Payment";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Payment />
      </Router>
    </>
  );
}

export default App;
