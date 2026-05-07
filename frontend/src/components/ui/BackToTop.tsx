import React from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a className="bg-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center text-threedots-blue border border-gray-200 hover:bg-threedots-blue hover:text-white transition-all group" href="#hero">
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </a>
    </div>
  );
}
