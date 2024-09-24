"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const InputSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input) {
      router.push(`/search/${input}`);
    }
  };

  console.log(input);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari..."
            className="px-3 py-1 w-64 rounded-full text-sm text-gray-100 bg-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="absolute top-[5px] right-3 text-slate-700" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSearch;
