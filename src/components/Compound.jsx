import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const CheckboxInterface = createContext(null);

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  // const allChildren = React.Children.map(children, (child) => {
  //   if (typeof child.type === "string") {
  //     throw new Error(
  //       `<${child.type}/> DOM element is not allowed inside <Checkbox/> components`
  //     );
  //   }

  //   const clone = React.cloneElement(child, {
  //     checked,
  //     setChecked,
  //   });
  //   return clone;
  // });

  return (
    <CheckboxInterface.Provider
      value={{
        checked,
        setChecked,
      }}
    >
      {children}
    </CheckboxInterface.Provider>
  );
};

const CheckboxInput = () => {
  const context = useContext(CheckboxInterface);

  // useEffect(() => {
  //   if (!context) {
  //     console.warn("Checkboxinput should be called inside the checkbox");
  //   }
  // });

  if (!context) {
    console.warn("Checkboxinput should be called inside the checkbox");
  }

  const { checked, setChecked } = context;

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        // _setChecked(e.target.checked);
        // if (setChecked) {
          setChecked(e.target.checked);
        // }
      }}
    />
  );
};

const Label = ({children}) => {
  const context = useContext(CheckboxInterface);

  if (!context) {
    throw new Error("Label should be called from checkbox components");
  }
  const { setChecked } = context;
  return (
    <label onClick={() => setChecked((state) => !state)}>{children}</label>
  );
};

const Compound = () => {
  return (
    <Checkbox>
      <CheckboxInput />
      <div>
        <Label>Check box label</Label>
      </div>
    </Checkbox>
  );
};

export default Compound;
