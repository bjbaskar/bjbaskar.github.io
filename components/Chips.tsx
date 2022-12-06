import React from "react";

type ChipsProps = {
  value: string;
  image?: string;
  bgVariant?: string;
};

const Chips: React.FC<ChipsProps> = ({
  value,
  image,
  bgVariant = "Primary",
}) => {
  return (
    <div className="p-1">
      <span
        className={`rounded-full font-medium text-sm flex align-center cursor-pointer
       active:bg-gray-300 transition duration-300 ease w-max m-1
       ${
         bgVariant === "Primary"
           ? "bg-blue-600 text-white"
           : bgVariant === "Secondary"
           ? "bg-purple-600 text-white"
           : "bg-gray-200"
       }`}
      >
        {/* <img
          className="rounded-full w-9 h-9 max-w-none"
          alt="A"
          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
        /> */}
        <span className="flex items-center px-3 py-2">{value}</span>
      </span>
    </div>
  );
};

export default Chips;
