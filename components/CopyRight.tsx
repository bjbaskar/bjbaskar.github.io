import React from "react";
import { ExternalLink } from "./Footer";

const Copyright: React.FC = () => {
  return (
    <div
      className="flex text-gray-500 hover:text-gray-600 transition 
      items-center justify-center mx-auto w-full mb-8"
    >
      <ExternalLink href="//bjbaskar.github.io/">
        {`Copyright © Baskaran Balaganesan ${new Date().getFullYear()}`}
      </ExternalLink>
    </div>
  );
};

export default Copyright;
