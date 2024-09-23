import React from 'react';
import { AiOutlineFileText } from 'react-icons/ai';

const ConceptList: React.FC<{ concepts: { concept: string; definition: string }[] }> = ({ concepts }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {concepts.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <AiOutlineFileText className="mr-2 text-indigo-500" /> {item.concept}
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{item.definition}</p>
        </div>
      ))}
    </div>
  );
};

export default ConceptList;