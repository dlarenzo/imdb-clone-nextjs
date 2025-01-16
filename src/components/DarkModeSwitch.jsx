"use client";
import React, { useEffect, useState } from "react";

// IMPORT ICONS
import { MdLightMode, MdDarkMode } from "react-icons/md";

// TO KNOW WHICH THEME IMPORT USETHEME HOOK
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  // USE EFFECT
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-3xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-3xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
}
