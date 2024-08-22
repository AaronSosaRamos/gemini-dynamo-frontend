import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BeakerIcon, LightBulbIcon } from '@heroicons/react/24/solid';

type ResultItem = {
  concept: string;
  definition: string;
  examples?: string[];
  related_topics?: string[];
  difficulty_level?: string;
  learning_methodology?: string;
  practical_applications?: string[];
  study_tips?: string[];
  revision_frequency?: string;
};

type ResultsListProps = {
  results: ResultItem[];
};

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  return (
    <div className="mt-6 space-y-6">
      {results.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-center mb-4">
            <AcademicCapIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
              {item.concept}
            </h3>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {item.definition}
          </p>

          {item.examples && (
            <div className="mb-4">
              <div className="flex items-center">
                <LightBulbIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-300" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 ml-2">
                  Examples
                </h4>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 ml-6">
                {item.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          )}

          {item.related_topics && (
            <div className="mb-4">
              <div className="flex items-center">
                <BeakerIcon className="h-6 w-6 text-teal-500 dark:text-teal-300" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 ml-2">
                  Related Topics
                </h4>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 ml-6">
                {item.related_topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {item.practical_applications && (
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Practical Applications
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 ml-6">
                {item.practical_applications.map((app, i) => (
                  <li key={i}>{app}</li>
                ))}
              </ul>
            </div>
          )}

          {item.study_tips && (
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Study Tips
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 ml-6">
                {item.study_tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {item.difficulty_level && (
            <div className="mb-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Difficulty Level:</strong> {item.difficulty_level}
              </p>
            </div>
          )}

          {item.learning_methodology && (
            <div className="mb-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Learning Methodology:</strong> {item.learning_methodology}
              </p>
            </div>
          )}

          {item.revision_frequency && (
            <div className="mb-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Revision Frequency:</strong> {item.revision_frequency}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ResultsList;
