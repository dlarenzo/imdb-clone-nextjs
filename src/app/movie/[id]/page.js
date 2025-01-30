import React from "react";

//  IMPORTS
import AddToFav from "@/components/AddToFav";
import Link from "next/link";

// SERVER SIDE SO IT'S AN ASYNC FUNCTION
export default async function MovePage({ params }) {
  // THE ID COMES FROM THE [] IN THE FILE NAME AND WE WILL CALL IT movieId
  const { id: movieId } = await params;
  // FETCH THE DATA FROM DB BASED ON THE movieId ALONG WITH THE API KEY
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const movie = await res.json();

  // IF THE RESPONSE IS NOT OKAY (WE DON'T HAVE A MOVIE WITH THAT ID) THEN DO THE FOLLOWING
  if (!res.ok) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-xl my-5">
          Movie details are not available right now. Try again later!
        </h1>
        {/* RETURN BACK TO HOM */}
        <p>
          <Link href="/" className="hover:text-amber-600">
            Back to home
          </Link>
        </p>
      </div>
    );
  }

  // OTHERWISE RETURN THE MOVIE DETAILS
  return (
    <div className="w-full">
      <div className="p-5 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          className="rounded-lg w-full md:w-96 h-56 object-cover"
        ></img>
        <div className="p-2 ml-4">
          <h2 className="text-lg mb-3 font-bold">
            {" "}
            {movie.title || movie.name}{" "}
          </h2>
          <p className="text-lg mb-3"> {movie.overview} </p>
          <p className=" mb-3">
            {" "}
            <span className="font-semibold mr-1">Date Released:</span>{" "}
            {movie.release_date}{" "}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
          <AddToFav
            movieId={movieId}
            movieName={movie.title || movie.name}
            image={movie.backdrop_path || movie.poster_path}
            overview={movie.overview}
            movieReleaseDate={movie.release_date || movie.first_air_date}
            voteCount={movie.vote_count}
          />
        </div>
      </div>
    </div>
  );
}
