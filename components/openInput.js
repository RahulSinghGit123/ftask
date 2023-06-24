import React from "react";

export default function OpenInput(props) {
  const { inputData, setInputData, postCardData } = props;
  return (
    <>
      <div className="bg-white grid gap-y-2 p-2 rounded-md">
        <div className="grid">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={inputData.title}
            onChange={(e) =>
              setInputData({ ...inputData, title: e.target.value })
            }
            className="border rounded-md"
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
            className="border rounded-md"
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
