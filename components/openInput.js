import React from "react";

export default function OpenInput(props) {
  const { inputData, setInputData, postCardData } = props;
  return (
    <>
      <div className="bg-gray-300 grid gap-y-2 p-2 mt-2 -ml-20 rounded-md drop-shadow-lg border-2">
        <div className="grid">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={inputData.title}
            onChange={(e) =>
              setInputData({ ...inputData, title: e.target.value })
            }
            className="bg-gray-100 border rounded-md p-2"
          />
        </div>
        <div className="grid">
          <label>Body</label>
          <input
            type="text"
            name="body"
            value={inputData.body}
            onChange={(e) =>
              setInputData({ ...inputData, body: e.target.value })
            }
            className="bg-gray-100 border rounded-md p-2"
          />
        </div>
        <button
          onClick={postCardData}
          className="bg-blue-700 text-white px-4 py-2 rounded-xl"
        >
          Make Card
        </button>
      </div>
    </>
  );
}
