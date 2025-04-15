"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Collapsible = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 border border-gray-200 rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-3 text-left font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white">{children}</div>
      )}
    </div>
  );
};

export const CollapsibleGroup = ({ items }) => {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <Collapsible key={index} title={item.title} defaultOpen={item.defaultOpen}>
          {item.content}
        </Collapsible>
      ))}
    </div>
  );
};