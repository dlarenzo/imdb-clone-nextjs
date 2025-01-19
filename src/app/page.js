import React from "react";
import Results from "@/components/Results";

// API KEY FROM .ENV.LOCAL FILE
const API_KEY = process.env.API_KEY;

// SERVER SIDE COMPONENT SO MUST BE ASYNCHRONOUS (We want to fetch data BEFORE page is loaded)
export default async function Home() {
  // FETCH DATA FROM API BEFORE PAGE LOADS
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed ot fetch data");
  }
  // IF DATA IS OK SAVE TO RESULTS VARIABLE
  const results = data.results;
  return (
    <div>
      {/* PASS results as param TO RESULTS COMPONENT */}
      <Results results={results} />
    </div>
  );
}
