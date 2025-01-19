import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="bg-amber-100 p-4 lg:text-lg flex justify-center gap-6">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="rated" />
    </div>
  );
}
