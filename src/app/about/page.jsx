"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-medium text-amber-600">About IMDB </h1>

      <div className="space-y-4">
        <p>
          Welcome to IMDB Clone! This app is designed to provide users with a
          comprehensive database of movies, TV shows, and entertainment content.
          Our goal is to offer a seamless and enjoyable experience for movie
          enthusiasts and casual viewers alike.
        </p>

        <p>
          On IMDB Clone, you&apos;ll find detailed information about your
          favorite movies and TV shows, including cast and crew details, plot
          summaries, user reviews, and ratings. We strive to keep our database
          up-to-date with the latest releases and trending content.
        </p>

        <p>
          We encourage you to rate and review the movies and shows you watch.
          Your feedback helps other users discover great content and enhances
          the overall community experience. Join us in celebrating the world of
          entertainment!
        </p>

        <p>
          Since 1990, an incredibly diverse range of people across the globe
          have been adding, refining, and correcting the data on IMDb. It's an
          ever-evolving process and we invite you to become a part of it. To
          become a contributor, you first need to register, but don’t worry it’s
          free and painless. After registering, check out the Getting Started
          guide to start submitting. Thank you for your interest and we
          appreciate your help making IMDb the world’s authoritative source for
          movie, TV, and celebrity content.
        </p>
        <p>
          A contributor is anyone who submits information for display on the
          site. There is a huge variety of data that can be added, such as a new
          Title (i.e. Movies, TV shows, Video Games etc.), Names (actors,
          writers, film crew, celebrities etc.) and numerous other categories
          such as directors, producers, trivia, goofs, soundtracks, quotes,
          release dates. Please see our Contributors' Charter for more
          information on how we work together.
        </p>

        <p>
          This website is created using Next.js and{" "}
          <Link
            href="https://go.clerk.com/fgJHKlt"
            target="_blank"
            className="text-teal-500 hover:underline"
          >
            Clerk
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
