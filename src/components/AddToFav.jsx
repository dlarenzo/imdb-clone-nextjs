// CLIENT SIDE COMPONENT SO NO NEED FOR ASYNC
"use client";
import React from "react";

// IMPORT STATE AND EFFECT
import { useState, useEffect } from "react";
// useUser FROM CLERK
import { useUser } from "@clerk/nextjs";
// IMPORT USE ROUTER
import { useRouter } from "next/navigation";

// THE PARAMS BEING PASSED THROUGH ARE FROM THE [ID OF MOVIE] PAGE
export default function AddToFav({
  movieId,
  title,
  overview,
  releaseDate,
  voteCount,
}) {
  // IS THIS MOVIE A FAVORITE OF THE USER OR NOT
  const [isFav, setIsFav] = useState(false);
  // LOADING STATE EFFECT
  const [loading, setLoading] = useState(true);
  // AUTHENTICATION STATUS FROM CLERK
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  // USE EFFECT IS LOGGED IN OR NOT
  useEffect(() => {
    setIsLoading(true);
    if (isLoaded && isSignedIn && user) {
      setIsFav(user.publicMetadata?.favs?.includes(movieId));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [movieId, isLoaded, isSignedIn, user]);

  // WHEN USER CLICKS ON THE BUTTON
  const handleFavClick = async () => {
    // IF NOT SIGNED IN REDIRECT TO SIGN IN PAGE
    setIsLoading(true);

    if (!isSignedIn) {
      setLoading(false);
      router.push("/sign-in");
      return;
    }

    // IF AUTHENTICATED FETCH URL
    try {
      const res = await fetch("/api/user/fav", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // SEND THE INFORMATION BELOW AND SAVE IT TO THE DATABASE
        body: JSON.stringify({
          movieId,
          title,
          overview,
          releaseDate,
          voteCount,
          image,
        }),
      });

      // IF IS FAVORITE IS ALREADY A FAVORITE REMOVE IT
      if (res.ok) {
        setIsFav(!isFav);
      } else {
        console.error("Failed to update your favorites");
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleFavClick}
        className={`p-2 rounded ${
          isFav ? "bg-red-300 dark:bg-red-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
        disabled={isLoading}
      >
        {/* ADD REMOVE FROM FAVORITES */}
        {isLoading
          ? "Loading..."
          : isFav
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
    </div>
  );
}
