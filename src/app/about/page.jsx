"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p>Welcome to the about page</p>

      <p>
        Since 1990, an incredibly diverse range of people across the globe have
        been adding, refining, and correcting the data on IMDb. It's an
        ever-evolving process and we invite you to become a part of it. To
        become a contributor, you first need to register, but don’t worry it’s
        free and painless. After registering, check out the Getting Started
        guide to start submitting. Thank you for your interest and we appreciate
        your help making IMDb the world’s authoritative source for movie, TV,
        and celebrity content.
      </p>
      <p>
        A contributor is anyone who submits information for display on the site.
        There is a huge variety of data that can be added, such as a new Title
        (i.e. Movies, TV shows, Video Games etc.), Names (actors, writers, film
        crew, celebrities etc.) and numerous other categories such as directors,
        producers, trivia, goofs, soundtracks, quotes, release dates. Please see
        our Contributors' Charter for more information on how we work together.
      </p>
    </div>
  );
}
