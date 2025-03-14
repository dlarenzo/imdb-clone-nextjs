"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const genre = usePathname().split("/")[2];
  return (
    <div>
      <Link
        className={`text-gray-700 hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/top/${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
