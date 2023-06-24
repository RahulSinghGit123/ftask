import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import OpenInput from "@/components/openInput";

export default function Task2() {
  const Data = {
    title: "",
    body: "",
  };
  const [inputData, setInputData] = useState(Data);
  const [cardDataList, setCardDataList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setCardDataList(response.data.slice(0, 10));
      })
      .catch((error) => console.log(error));
  }, []);

  async function postCardData() {
    if (inputData.title === "" || inputData.body === "") {
      alert("Please fill the title and body");
      return;
    }

    let data = {
      title: inputData.title,
      body: inputData.body,
      userId: 1,
    };
    
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios
      .request(config)
      .then((response) => {
        let newCardList = cardDataList;
        newCardList.unshift(inputData);
        setCardDataList(newCardList);
        setInputData(Data);
      })
      .catch((error) => {
        alert("Post adding failed.")
      });
  }
  return (
    <>
      <div className="bg-gray-300 grid place-items-center gap-y-4 p-10">
        <p className="md:text-xl">This is Second Task</p>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-blue-700 text-white px-4 py-2 rounded-xl"
        >
          Post Request
        </button>
        {open && (
          <OpenInput
            inputData={inputData}
            setInputData={setInputData}
            postCardData={postCardData}
            cardDataList={cardDataList}
          />
        )}
        {cardDataList?.map((person, id) => (
          <div
            key={person.title}
            className="bg-white max-w-[700px]  grid justify-between items-center grid-cols-3 p-5 rounded-2xl"
          >
            <div className="col-span-2 space-y-4">
              <div className="text-gray-400 text-2xl font-semibold">
                {person.title}
              </div>
              <div className="text-2xl font-bold font-[poppins] text-[30px]">
                {person.body}
              </div>
              <div className="text-gray-400 text-xl font-bold">
                Today 2 h min read
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src="/dog.jpg"
                alt=""
                width="100"
                height="100"
                className="rounded-2xl h-auto w-56"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
