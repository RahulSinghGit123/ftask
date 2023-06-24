/** @format */

import { useState } from "react";
import EditInput from "../components/task3/editInput";
import RemoveButton from "../components/task3/removeButton";
import EditButton from "../components/task3/editButton";
import AddListItem from "../components/task3/addListItemButton";
import TodoInput from "../components/task3/todoInput";

export default function Todolist() {
  const [items, setItems] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});

  function addListItems() {
    if (items === "") {
      alert("Please enter a task");
      return;
    }
    setItemsList((itemsList) => {
      const updatedList = [...itemsList, items];
      return updatedList;
    });
    setItems("");
  }
  function removeitems(i) {
    const updateditemsList = itemsList.filter((elem, id) => {
      return i !== id;
    });
    setItemsList(updateditemsList);
  }
  function editItems(i) {
    setUpdatedItem({ idx: i, value: itemsList[i] });
  }

  function handleUpdateDone() {
    let updatedlist = itemsList;
    updatedlist[updatedItem.idx] = updatedItem.value;

    setItemsList(updatedlist);
    setUpdatedItem({});
  }

  return (
    <>
      <div className="flex justify-between bg-gray-200 gap-y-2 pt-10">
        <div></div>
        <div className="grid gap-y-2">
          <div>
            <h1 className="bg-purple-400 text-center py-3 text-white font-bold rounded">
              Todo List
            </h1>
          </div>
          <div className=" bg-white grid place-items-center gap-y-2 p-2">
            <div>
              <TodoInput items={items} setItems={setItems} />
            </div>
            {itemsList?.map((item, i) => {
              return (
                <>
                  <div key={item.i} className="flex">
                    {updatedItem?.idx === i ? (
                      <EditInput
                        updatedItem={updatedItem}
                        setUpdatedItem={setUpdatedItem}
                        handleUpdateDone={handleUpdateDone}
                      />
                    ) : (
                      <div>{item}</div>
                    )}
                    <RemoveButton removeitems={removeitems} i={i} />
                    <EditButton editItems={editItems} i={i} />
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center">
            <AddListItem addListItems={addListItems} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
