import React from "react";
import { useSelector } from "react-redux";
import languageConstants from "../utils/languageConstants";

const GptSearchBar = () => {

  const selectLang = useSelector((store)=>store.config.lang)

  return (
    <div className="py-[10%] ">
      <form className=" w-[50%] mx-auto  ">
        <input
          className="py-3 px-7 w-[75%] text-lg rounded-l-full border-none outline-none"
          type="text"
          placeholder={languageConstants[selectLang].gptSearchPlaceholder}
        />
        <button className="py-3 w-[25%] text-lg text-white bg-red-600 rounded-r-full">{languageConstants[selectLang].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
