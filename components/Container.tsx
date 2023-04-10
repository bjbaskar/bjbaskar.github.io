import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import Footer from "./Footer";
import { DesktopMenu, MobileMenu } from "./DesktopMenu";

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, [setTheme]);

  const { children, ...customMeta } = props;
  const router = useRouter();

  return (
    <div className="w-full bg-white dark:bg-zinc-900">
      <nav
        className="fixed top-0 z-50 flex justify-between items-center w-full 
      p-8 mx-auto bg-gray-900 dark:bg-zinc-900"
      >
        <div className="text-xl text-gray-300">{"<Baskar />"}</div>
        <div
          className="hidden sm:block rounded-full flex-row bg-white/90 px-3 text-sm font-medium
         text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
         dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10"
        >
          <DesktopMenu
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            router={router}
          />
        </div>
        <div className="block sm:hidden mr-2">
          <MobileMenu />
        </div>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center 
          hover:ring-2 ring-gray-300  transition-all"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>

      <main id="skip" className="flex flex-col">
        {children}
        <Footer />
      </main>
    </div>
  );
}
