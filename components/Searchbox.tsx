"use client";
import React from "react";

type SearchboxProps = {
  onChange: (newValue: string) => void;
};

function Searchbox({ onChange }: SearchboxProps) {
  return (
    <div className="mt-3 flex justify-center">
      <div className="relative mb-4 flex flex-wrap items-stretch w-[600px]">
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="bg-gray-700"
            className="h-8 w-8"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <input
          type="search"
          className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid
          bg-clip-padding px-3 py-2 text-base font-normal leading-[1.6]
          outline-none transition duration-200 ease-in-out focus:z-[3] 
          focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none  
          bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500"
          placeholder="Search for an Open Science Project"
          aria-label="Search for an Open Science Project"
          aria-describedby="button-addon2"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Searchbox;
