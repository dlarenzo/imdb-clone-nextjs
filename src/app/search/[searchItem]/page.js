import React from "react";
import Results from "@/components/Results";

// SERVER SIDE COMPONENT SO MUST BE ASYNCHRONOUS (We want to fetch data BEFORE page is loaded)
// We get the search term from the URL params
export default async function Page({ params }) {
  const { searchItem } = await params;

  try {
    // FETCH DATA FROM API BEFORE PAGE LOADS
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchItem}&language=en-US&page=1&include_adult=false`
    );

    // IF DATA IS OK SAVE TO RESULTS VARIABLE
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        {/* IF THERE ARE NO RESULTS */}
        {results.length === 0 ? (
          <h1 className="text-center mt-10">
            No results found for {searchItem}
          </h1>
        ) : (
          <Results results={results} />
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        <h1 className="text-center mt-10">Error fetching data</h1>
      </div>
    );
  }
}
