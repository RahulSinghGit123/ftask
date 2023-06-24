/** @format */

import React from "react";

export default function AddListItem(props) {
    const { addListItems } = props;
  return (
    <button
      className="flex bg-purple-600 text-white font-bold px-4 py-2 rounded-full"
      onClick={addListItems}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      Add Task
    </button>
  );
}
