import React, { useReducer } from "react";
import { useState } from "react";

function reducer({ state }) {
  switch (state) {
    case "PRESSED_ONCE":
      return {
        state: "PRESSED_TWO",
      };
    case "PRESSED_TWO":
      return {
        state: "PRESSED_THREE",
      };
    case "PRESSED_THREE":
      return {
        state: "PRESSED_ONCE",
      };
  }
}

const Button = (props) => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    state: "PRESSED_ONCE",
  });

  return (
    <button
      style={{
        color: props.color,
        textDecoration: props.underline ? "underline" : undefined,
      }}
      onClick={() => dispatch()}
    >
      I am a button {state.state}
    </button>
  );
};

const State = () => {
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

export default State;
