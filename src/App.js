import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Main />
      </Router>
    </>
  );
}

export default App;
