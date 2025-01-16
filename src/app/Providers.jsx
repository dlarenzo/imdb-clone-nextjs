"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider className="defaultTheme='system" attribute="class">
      <div className="min-h-screen select-none transition-duration-300">
        {children}
      </div>
      ;
    </ThemeProvider>
  );
}
