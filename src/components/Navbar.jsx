import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div>
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="rated" />
    </div>
  );
}
