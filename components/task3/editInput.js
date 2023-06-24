/** @format */

import React from "react";

export default function EditInput(props) {
    const { updatedItem, setUpdatedItem, handleUpdateDone } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Write Todos here"
        value={updatedItem.value}
        onChange={(e) => {
          setUpdatedItem({ ...updatedItem, value: e.target.value });
        }}
        className="relative p-2 rounded border border-black"
      />
      <button className=" bg-purple-300  text-white font-bold px-2 mx-1 rounded-full " onClick={handleUpdateDone}>done</button>
    </div>
  );
}
