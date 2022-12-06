import React from "react";
import Chips from "./Chips";
import { ChipsData } from "../data";

const TechnicalChips: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap">
      {ChipsData.map((d, idx) => (
        <div key={d}>
          <Chips value={d} bgVariant={idx % 2 ? "Secondary" : "Primary"} />
        </div>
      ))}
    </div>
  );
};

export default TechnicalChips;
