import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  let increaseCount = () => {
   
    setCount(count + 1);
    console.log("Sumando 1...");
  };
  let decreaseCount = () => {
    setCount(count - 1);
    console.log("Restando 1...");
  };
  return (
    <div className="count">
      {count}
     
     
    </div>
  );
};

export default Counter;