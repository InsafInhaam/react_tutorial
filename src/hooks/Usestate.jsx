import React, { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme("decresing");
  }

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("increasing");
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>

      <span>{theme}</span>
    </>
  );
};

export default Usestate;
