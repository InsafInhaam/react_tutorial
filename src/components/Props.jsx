import React from "react";
import { useState } from "react";

const Button = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <button
      style={{
        color: props.color,
        textDecoration: props.underline ? "underline" : undefined,
      }}
      onClick={() => setCounter((c) => c + props.increment)}
    >
      I am a button {counter}
    </button>
  );
};

const Props = () => {
  const props = {
    increment: 2,
    underline: true,
    color: "black",
  };

  return (
    <div>
      <Button {...props} color="black" />
      <Button {...props} color="blue" />
      <Button {...props} color="green" />
    </div>
  );
};

export default Props;
