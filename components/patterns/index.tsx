import React from "react";
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

const Row: React.FC<IRow> = ({ text }) => {
  const router = useRouter();
  const showPatterns = router.query.showPatterns;
  const sValue = showPatterns ? showPatterns[0] : "singleton";

  const link = text ? text.split(" ").join("").toLowerCase().toLowerCase() : "";
  return <Link href={`/patterns/${link}`}
    className={sValue === link ? "text-blue-600" : "hover:text-orange-600"}>{text}</Link>;
};

const Patterns: React.FC = () => {
  return (
    <div className="divide-y-2 divide-gray-200 dark:divide-gray-700">
      {patternsText.map((d, idx) => (
        <div key={d.text} className="py-4">
          <Row text={d.text} rowNum={idx + 1} />
        </div>
      ))}
    </div>
  );
};

export default Patterns;
