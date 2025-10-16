import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-gray-300 rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="search for products..."
        className="w-full h-full 
      focus:outline-none bg-inherit p-2 text-[17px]"
      />
      <Button
        className="!absolute top-[8px] right-[5px] z-50 !w-[37px]
            !min-w-[37px] h-[37px] !rounded-full !text-black "
      >
        <IoSearch className="!text-[#1f0101] text-[22px]" /> 
      </Button>
    </div>
  );
};

export default Search;
