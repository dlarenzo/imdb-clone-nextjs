import React from "react";
import Results from "@/components/Results";

// API KEY FROM .ENV.LOCAL FILE
const API_KEY = process.env.API_KEY;

// SERVER SIDE COMPONENT SO MUST BE ASYNCHRONOUS (We want to fetch data BEFORE page is loaded)
export default async function Home({ params }) {
  const genre = params.genre;
  // DEPENDING ON GENRE FETCH DIFFERENT DATA (TRENDING OR TOP RATED)
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "rated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  // IF DATA IS OK SAVE TO RESULTS VARIABLE
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
