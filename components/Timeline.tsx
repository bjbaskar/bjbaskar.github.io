import React from "react";
import { ITimelineData, TimelineData } from "../data";

const TimelineContent: React.FC<ITimelineData> = ({
  id,
  title,
  company,
  location,
  technology,
  domain,
  year,
}) => {
  return (
    <div className="flex items-start relative" key={id}>
      <div className="hidden md:block w-20">
        <div className="font-bold italic">{year}</div>
        <div className="md:flex space-x-1 text-xs">
          <div>{location}</div>
        </div>
      </div>

      <div
        className="border-r-2  absolute h-full left-5 md:left-20 top-2 z-10
      border-black dark:border-indigo-800"
      >
        <i className="rounded-full bg-white border-green-500 border-4 w-4 h-4 -top-1 -ml-2 absolute"></i>
      </div>

      <div className="ml-10 w-full mb-8 px-4 rounded shadow-md hover:shadow-xl">
        <div className="font-bold">{company}</div>
        <div className="italic md:mb-4">
          {title} | {domain}
        </div>
        <div className="mb-4 mt-2 md:hidden">
          <div className="font-bold">{year}</div>
          <div className="text-xs">{location}</div>
        </div>
        <div className="mb-4 text-gray-500 text-sm flex-wrap">{technology}</div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="w-full relative mt-5 text-left">
      {TimelineData.map((d, idx) => (
        <TimelineContent
          key={d.id}
          id={`${d.id}`}
          title={d.title}
          company={d.company}
          location={d.location}
          technology={d.technology}
          domain={d.domain}
          year={d.year}
        />
      ))}
    </div>
  );
};

export default Timeline;
