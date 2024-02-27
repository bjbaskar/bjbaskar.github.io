import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface IRow {
  text: string;
  rowNum?: number;
}

const patternsText: Array<IRow> = [
  { text: "Singleton" },
  { text: "Factory" },
  { text: "Abstract Factory" },
  { text: "Builder" },
  { text: "Prototype" },

  { text: "Adapter" },
  { text: "Bridge" },
  { text: "Composite" },
  { text: "Decorator" },
  { text: "Facade" },
  { text: "Flyweight" },
  { text: "Proxy" },
  { text: "Chain of Responsibility" },
  { text: "Command" },
  { text: "Iterator" },
  { text: "Mediator" },
  { text: "Memento" },

  { text: "Observer" },
  { text: "State" },
  { text: "Strategy" },
  { text: "Template Method" },
  { text: "Visitor" },
];

const TOC: React.FC<IRow> = ({ text, rowNum }) => {
  const router = useRouter();
  const showPatterns = router.query.showPatterns;
  const sValue = showPatterns ? showPatterns[0] : "";
  const link = text ? text.split(" ").join("").toLowerCase().toLowerCase() : "";

  return (
    <li>
      <Link
        href={`/patterns/${link}#chooseLanguage`}
        className="relative flex flex-row items-center h-8 focus:outline-none
        hover:bg-gray-50 text-gray-300 hover:text-red-800 border-l-4 border-transparent
        hover:border-indigo-500 pr-6"
      >
        <span
          className={`ml-6 text-sm tracking-wider truncate 
            ${sValue === link ? "text-blue-600" : "hover:text-orange-600"}`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

const PatternsTOC: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="relative md:flex h-screen overflow-hidden w-64 ">
        <div className="h-full sidebar w-64 space-y-6 py-2 px-2 ease-in-out overflow-y-auto">
          <div className="flex items-center space-x-2 px-4">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="text-xl flex items-center justify-center h-10">
              Design Patterns
            </span>
          </div>

          <nav>
            <ul className="flex flex-col space-y-1">
              {patternsText.map((d, idx) => (
                <Fragment key={idx}>
                  <TOC text={d.text} rowNum={idx} />
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PatternsTOC;
