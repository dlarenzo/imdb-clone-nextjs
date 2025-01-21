"use client";

// IMPORTS
import { useEffect } from "react";

// PASS PARAMS TO GET ERROR AND ALSO RESET FUNCTION
export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Oh No! Something went wrong. Please try again later.</h1>
      {/* RESETS THE PAGE  */}
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
