import React, { useState } from "react";

export default function Search(props) {
  const [name, setName] = useState("");

  const triggerSearch = () => {
    return props.setSearchValue(name);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10 md:mt-20 md:mb-20">
      <input
        type="text"
        className="border border-gray-300 rounded-md w-[70vw] md:w-[50vw] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Search movies..."
        value={name}
        onChange={(e) => {
          return setName(e.target.value);
        }}
      />
      <button
        onClick={triggerSearch}
        className="mt-5 px-4 py-2 w-[70vw] md:w-[50vw] bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Search
      </button>
    </div>
  );
}
