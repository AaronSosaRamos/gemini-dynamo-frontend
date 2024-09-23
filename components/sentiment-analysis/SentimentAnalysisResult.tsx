import React from 'react';
import { FaClock, FaLanguage, FaStar } from 'react-icons/fa';

type SentimentData = any;

interface SentimentResultsProps {
  data: SentimentData;
}

export const SentimentResults: React.FC<SentimentResultsProps> = ({ data }) => {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Sentiment Analysis Results ✨</h2>
      <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
        <FaLanguage className="inline mr-2" />
        Language: <strong>{data.language || 'Unknown'} 🌍</strong>
      </p>
      <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
        <FaClock className="inline mr-2" />
        Timestamp: <strong>{new Date(data.timestamp).toLocaleString() || 'N/A'} ⏰</strong>
      </p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Overall Sentiment</h3>
        <p className="flex items-center text-lg text-gray-800 dark:text-gray-200">
          <FaStar className="text-yellow-500 mr-2" />
          <span>{data.overall_sentiment.sentiment || 'Unknown'} (Score: {data.overall_sentiment.score || 'N/A'}) ⭐</span>
        </p>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Aspect Sentiments</h3>
      <ul className="list-disc pl-5">
        {data.aspect_sentiments.map((aspect: any, index: number) => (
          <li key={index} className="mb-2 text-lg text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{aspect.aspect || 'Unknown'}:</span>
            <span className="ml-2">
              {aspect.sentiment || 'Unknown'} (Score: {aspect.score !== undefined ? aspect.score : 'N/A'}) 🔍
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
