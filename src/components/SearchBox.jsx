"use client";
import React from "react";

// IMPORT STATES
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  // STATE FOR SEARCH
  const [search, setSearch] = useState("");
  // ROUTER
  const router = useRouter();
  // FUNCTION TO HANDLE SEARCH
  const handleSearch = (e) => {
    e.preventDefault();
    // IF SEARCH IS EMPTY RETURN
    if (!search) return;
    // PUSH TO ROUTER
    router.push(`/search/${search}`);
    // CLEAR SEARCH
    setSearch("");
  };
  return (
    <form
      className="flex justify-between my-5 px-5 max-w-6xl mx-auto"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded-lg"
        placeholder="Search for a movie"
      ></input>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg ml-2"
      >
        Search
      </button>
    </form>
  );
}
