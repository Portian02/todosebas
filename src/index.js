import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/container/Container";
import Counter from "./components/Counter/Counter";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="Todo">
      <h1>To do List</h1>
      <Counter />
      <Container />
      <br />
    </div>
  </React.StrictMode>
);
