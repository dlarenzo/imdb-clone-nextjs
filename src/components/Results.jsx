import React from "react";
// IMPORT CARD COMPONENT
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {/* MAP THROUGH INFO AND PASS TO CARD COMPONENT CARDS PASSING THROUGH PARAMS RESULT */}
      {results.map((result) => (
        // KEY AND ID IS NEED FOR EACH CARD
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
