import React, { useEffect, useReducer } from "react";
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

const State2 = () => {
  const [state, setState] = useState('idle');

  function clicked(){
    setState('loading')
    fetch('/data.json').then((data) => {
        try {
            JSON.parse(data)
            setState('loaded')  
        } catch (error) {
            setState('req-error')
        }
    }).catch(() => {
        setState('network-error')
    })
  }

  if(state === 'loading'){
    return <div>Loading...</div>
  }
  
  if(state === 'req-error'){
    return <div>Bad server response</div>
  }

  if(state === 'network-error'){
    return <div>Error fetching your request</div>
  }
  return (
    <div onClick={clicked}>
        current state: {state}
    </div>
  );
};

export default State2;