import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());

    console.log("updaing items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default List;
