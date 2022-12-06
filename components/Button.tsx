import React from "react";

type ButtonProps = {
  value: string;
  isOutline?: boolean;
};

const Button: React.FC<ButtonProps> = ({ value, isOutline = false }) => {
  return (
    <div className="flex space-x-2 justify-center">
      {isOutline ? (
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          {value}
        </button>
      ) : (
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {value}
        </button>
      )}
    </div>
  );
};

export default Button;
