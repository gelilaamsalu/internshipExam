import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./components/nav";
import SimpleTodo from "./components/SimpleTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grandParent">
        <div className="parent">
          <NavBar></NavBar>
          <SimpleTodo></SimpleTodo>
        </div>
        <div className="parent"></div>
      </div>
    </>
  );
}

export default App;
