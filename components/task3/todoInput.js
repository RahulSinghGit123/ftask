/** @format */

import React from "react";

export default function TodoInput(props) {
  const { items, setItems } = props;
  return (
    <input
      type="text"
      placeholder="Write Todos here"
      value={items}
      onChange={(e) => {
        setItems(e.target.value);
      }}
      className="relative p-2 rounded border border-black"
    />
  );
}
