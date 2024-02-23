import React, { Fragment, useState } from "react";
import Image from "next/image";
import { PatternContext } from "../../core/patternContext";

const ChooseLanguage: React.FC = () => {
  const [selectLang, setSelectLang] = useState<string>("typescript");
  const patternCtx = React.useContext(PatternContext);

  const onSelectLanguage = (text: string) => {
    if (text !== "") {
      setSelectLang(text);
      if (patternCtx.setPatternContext) {
        patternCtx.setPatternContext(text);
      }
    }
  };

  return (
    <Fragment>
      {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        How much do you expect to use each month?
      </h3> */}
      <ul className="w-full gap-6 flex flex-row">
        <li className="justify-self-center">
          <input
            type="radio"
            id="typescript"
            name="typescript"
            value="typescript"
            className="hidden peer"
            checked={selectLang === "typescript"}
            required
            onChange={(e) => onSelectLanguage(e.target.value)}
          />
          <label
            htmlFor="typescript"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-row items-center">
              <Image
                className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                src={"/skills/typescript.svg"}
                alt=""
                width={60}
                height={60}
              />
              <div className="w-full text-lg font-semibold px-2">
                Typescript
              </div>
            </div>
          </label>
        </li>
        <li className="justify-self-center">
          <input
            type="radio"
            id="python"
            name="python"
            value="python"
            className="hidden peer"
            checked={selectLang === "python"}
            onChange={(e) => onSelectLanguage(e.target.value)}
          />
          <label
            htmlFor="python"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-row items-center">
              <Image
                className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                src={"/skills/python.svg"}
                alt=""
                width={60}
                height={60}
              />
              <div className="w-full text-lg font-semibold px-2">Python</div>
            </div>
            {/* <svg
              className="w-5 h-5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
          </label>
        </li>
      </ul>
    </Fragment>
  );
};

export default ChooseLanguage;
