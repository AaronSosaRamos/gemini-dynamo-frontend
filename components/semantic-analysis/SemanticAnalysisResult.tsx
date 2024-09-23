import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaHospital, FaUniversity, FaRobot, FaSmile, FaLanguage, FaKey } from 'react-icons/fa';
import { AiOutlineFileSearch, AiOutlineFlag } from 'react-icons/ai';

interface ResultCardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;
}

// Componente reutilizable para mostrar los resultados
const ResultCard: React.FC<ResultCardProps> = ({ title, value, icon }) => (
  <motion.div
    className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-4 flex items-center space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-3xl text-blue-500">{icon}</div>
    <div>
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </div>
  </motion.div>
);

interface ResultsDisplayProps {
  data: any;  
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ data }) => {
  const {
    input_text,
    entities,
    keywords,
    sentiment,
    language,
    confidence,
    summary,
  } = data;

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
        Analysis Results 🧠
      </h1>
      
      <ResultCard
        title="Original Text"
        value={input_text}
        icon={<AiOutlineFileSearch />}
      />

      <ResultCard
        title="Summary"
        value={summary}
        icon={<AiOutlineFileSearch />}
      />
      
      <ResultCard
        title="Language"
        value={language}
        icon={<FaLanguage />}
      />

      <ResultCard
        title="Confidence"
        value={`${(confidence * 100).toFixed(2)}%`}
        icon={<FaSmile />}
      />

      <motion.div
        className="my-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Entities Detected 🏷️</h2>
        <ul className="space-y-2">
          {entities.map((entity: any, index: number) => (
            <li key={index} className="text-gray-800 dark:text-gray-200">
              <strong>{entity.text}</strong> - {entity.type} (Start: {entity.start_char}, End: {entity.end_char})
            </li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div
        className="my-4 p-4 bg-green-50 dark:bg-green-900 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Keywords 🔑</h2>
        <ul className="space-y-2">
          {keywords.map((keyword: any, index: number) => (
            <li key={index} className="text-gray-800 dark:text-gray-200">
              <FaKey className="inline-block text-yellow-500 mr-2" /> {keyword.word} - Importance: {keyword.importance}
            </li>
          ))}
        </ul>
      </motion.div>

      <ResultCard
        title="Sentiment Analysis"
        value={`Polarity: ${sentiment.polarity}, Subjectivity: ${sentiment.subjectivity}`}
        icon={<FaBrain />}
      />

      <motion.div
        className="my-4 p-4 bg-purple-50 dark:bg-purple-900 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Additional Information 🌍</h2>
        <p className="text-gray-800 dark:text-gray-200">Language detected: {language}</p>
        <p className="text-gray-800 dark:text-gray-200">Confidence level: {(confidence * 100).toFixed(2)}%</p>
      </motion.div>
    </motion.div>
  );
};

