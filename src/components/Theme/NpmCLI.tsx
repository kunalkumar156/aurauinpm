import React from "react";
import { CopyToClipboard } from "nextra/components";

interface NpmCLIProps {
  componentName: string; // Pass the component name dynamically
}

const NpmCLI: React.FC<NpmCLIProps> = ({ componentName }) => {
  const command = `npm install aurauiclone/${componentName}`;
  const getValue = () => command;

  return (
    <div className="flex items-center bg-[#1E1E1E] p-2 px-4 shadow-md rounded-lg space-x-4">
      <span className="text-white font-mono">{command}</span>
      <CopyToClipboard getValue={getValue}>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default NpmCLI;
