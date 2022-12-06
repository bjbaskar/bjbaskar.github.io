import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const linksMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Technical Stack",
    link: "/techstack",
  },
  {
    name: "Work History",
    link: "/workhistory",
  },
  {
    name: "Patterns",
    link: "/patterns",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

type DesktopMenuProps = {
  hoveredIndex: number;
  setHoveredIndex: any;
  router: any;
};

export const DesktopMenu = ({
  hoveredIndex,
  setHoveredIndex,
  router,
}: DesktopMenuProps) => {
  return (
    <>
      {linksMenu.map((navLink, index) => (
        <Link href={navLink.link} key={navLink.name}>
          <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0  transform bg-gray-50 dark:bg-zinc-900"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span
              className={`relative z-10 ${
                router.asPath === navLink.link
                  ? "text-teal-600"
                  : "text-gray-600 dark:text-gray-50"
              }`}
            >
              {navLink.name}
            </span>
            {router.asPath === navLink.link && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dropIn = {
    hidden: {
      y: "-4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };
  const handleClick = (link: string) => {
    setOpen(false);
    router.push(link);
  };

  useEffect(() => {}, [open]);

  return (
    <div className="w-full flex flex-row items-center space-x-2">
      <button
        onClick={() => handleClick(linksMenu[0].link)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 
        text-sm text-gray-50 dark:text-gray-50 transition-all delay-150 
        hover:text-gray-900 dark:hover:text-gray-900"
      >
        {linksMenu[0]?.name}
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => null}
      >
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%]   p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-gray-800 divide-y dark:divide-gray-700"
          >
            {[...linksMenu].splice(1).map((el) => (
              <button
                key={el?.link}
                onClick={() => handleClick(el.link)}
                className="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <AnimatePresence>
                  <span className="relative z-10">{el.name}</span>
                </AnimatePresence>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
