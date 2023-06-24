import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

const Names = [
  { id: 1, name: "Emily" },
  { id: 2, name: "Ethan" },
  { id: 3, name: "Olivia" },
  { id: 4, name: "Liam" },
  { id: 5, name: "Noah" },
  { id: 6, name: "Isabella" },
  { id: 7, name: "Thi" },
  { id: 8, name: "Mathi" },
  { id: 9, name: "Smithi" },
  { id: 10, name: "Samantha" },
  { id: 11, name: "Anthony" },
  { id: 12, name: "Lathi" },
  { id: 13, name: "Elijah" },
  { id: 14, name: "Nathi" },
];

export default function Example() {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? Names
      : Names.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="grid place-items-center gap-y-10 m-20">
      <p className="md:text-xl">This is First Task</p>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <p className="md:text-xl text-md">Type for Search</p>
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm space-y-2">
            <Combobox.Input
              className="w-full border py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="grid grid-cols-3 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-2 sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default w-auto select-none py-2 px-2 rounded-full text-center text-bold ${
                        active ? "border " : "text-gray-900"
                      } text-xl`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
