import { useRouter } from 'next/navigation';
import { FaRocket, FaLightbulb, FaCogs, FaLayerGroup, FaProjectDiagram, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MainScreen() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/dynamo');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-4xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          🚀 Gemini Dynamo
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Key Concept Retriever 🔍
        </h2>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          💼 Enhance your data analysis with automated key concept extraction from various sources. 
          <br />📊 Dive deeper into your data and gain valuable insights effortlessly! 🌟
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full max-w-5xl">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleButtonClick}
          className="flex items-center justify-center bg-indigo-600 dark:bg-indigo-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300"
        >
          <FaRocket className="mr-3 text-2xl" /> Concept Retriever
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
        >
          <FaLightbulb className="mr-3 text-2xl" /> Structured Data Study
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center bg-green-600 dark:bg-green-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-green-700 dark:hover:bg-green-600 transition duration-300"
        >
          <FaCogs className="mr-3 text-2xl" /> Semantic Analysis
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center bg-purple-600 dark:bg-purple-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300"
        >
          <FaLayerGroup className="mr-3 text-2xl" /> Topic Clustering
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center bg-red-600 dark:bg-red-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-red-700 dark:hover:bg-red-600 transition duration-300"
        >
          <FaProjectDiagram className="mr-3 text-2xl" /> Relation Mapping
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center bg-teal-600 dark:bg-teal-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition duration-300"
        >
          <FaSmile className="mr-3 text-2xl" /> Sentiment Analysis
        </motion.button>
      </div>

      <div className="flex justify-center mt-10 space-x-6">
        <FaLightbulb className="text-3xl text-gray-700 dark:text-gray-300" />
        <FaCogs className="text-3xl text-gray-700 dark:text-gray-300" />
        <FaLayerGroup className="text-3xl text-gray-700 dark:text-gray-300" />
        <FaProjectDiagram className="text-3xl text-gray-700 dark:text-gray-300" />
        <FaSmile className="text-3xl text-gray-700 dark:text-gray-300" />
      </div>
    </div>
  );
}
