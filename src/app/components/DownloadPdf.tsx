"use client";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Edit3, Printer } from "lucide-react";

const DownloadPdf = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="p-1 px-5 flex justify-between mx-auto gap-20 max-w-4xl">
      <button
        onClick={reactToPrintFn}
        className="w-fit flex items-center  self-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Print or preview document as PDF"
      >
        <Printer className="w-5 h-5" />
        Print PDF
      </button>

      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <Edit3 className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-gray-600">
            Click on any field like Name to edit. Your changes will appear{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadPdf;
