import React from 'react';
import { AiOutlineCluster, AiOutlineStar, AiOutlineBulb } from 'react-icons/ai';

const ClusteringResult: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 mb-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Clustering Results 🚀
      </h2>
      <div className="text-center mb-4">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Clustering Algorithm: <span className="font-bold">{data.clustering_algorithm}</span>
        </p>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Total Clusters: <span className="font-bold">{data.metadata.num_clusters}</span>
        </p>
      </div>

      <div className="space-y-10">
        {data.clusters.map((cluster: any) => (
          <div key={cluster.cluster_id} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold flex items-center mb-4 text-gray-800 dark:text-gray-100">
              <AiOutlineCluster className="mr-2 text-indigo-500" /> {cluster.central_topic}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cluster.topics.map((topic: any) => (
                <div key={topic.topic_id} className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg shadow">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
                    <AiOutlineBulb className="mr-2 text-indigo-500" /> {topic.topic_name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{topic.description}</p>
                  <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                    <span className="font-bold">Keywords:</span> {topic.keywords.join(', ')}
                  </p>
                  <div className="mt-4 flex items-center">
                    <AiOutlineStar className="mr-1 text-yellow-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Importance Score: {topic.importance_score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClusteringResult;
