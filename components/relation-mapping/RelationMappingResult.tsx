import React from 'react';
import {
  AiOutlineCluster,
  AiOutlineBranches,
  AiOutlineFileText,
  AiOutlineLink,
  AiOutlineWarning,
} from 'react-icons/ai';

// Componente reutilizable para presentar los resultados del mapeo de relaciones
const RelationMappingResult: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Relation Mapping Results 🌐
      </h2>
      <div className="mb-4 text-center">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Mapping Algorithm: <span className="font-bold">{data.algorithm}</span>
        </p>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Total Entities: <span className="font-bold">{data.metadata.num_entities}</span>
        </p>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Total Relations: <span className="font-bold">{data.metadata.num_relations}</span>
        </p>
      </div>

      <div className="space-y-6">
        {/* Muestra las entidades */}
        {data.entities.map((entity: any) => (
          <div
            key={entity.entity_id}
            className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-100">
              <AiOutlineCluster className="mr-2 text-indigo-500" /> {entity.entity_name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{entity.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Entity Type: {entity.entity_type}
            </p>
            <div className="mt-4">
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Attributes</h4>
              <div className="space-y-2">
                {/* Muestra los atributos */}
                {entity.attributes.map((attr: any, idx: number) => (
                  <div key={idx} className="flex items-start">
                    <AiOutlineFileText className="mr-2 text-indigo-400" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>{attr.attribute_name}</strong> ({attr.attribute_type})
                      </p>
                      {attr.is_primary_key && (
                        <p className="text-sm text-green-500">Primary Key 🔑</p>
                      )}
                      {attr.is_foreign_key && (
                        <p className="text-sm text-blue-500">Foreign Key 🔗</p>
                      )}
                      {attr.constraints === null && (
                        <p className="text-sm text-yellow-500 flex items-center">
                          <AiOutlineWarning className="mr-1" /> No constraints
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Muestra las relaciones */}
        {data.relations.map((relation: any) => (
          <div key={relation.relation_id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-100">
              <AiOutlineBranches className="mr-2 text-indigo-500" /> Relation: {relation.relation_type}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{relation.description}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Source Entity: <span className="font-bold">{relation.source_entity}</span> ➡️
                Target Entity: <span className="font-bold">{relation.target_entity}</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cardinality: {relation.cardinality.source_cardinality} ➡️{' '}
                {relation.cardinality.target_cardinality}
              </p>
              {relation.constraints === null && (
                <p className="text-sm text-yellow-500 flex items-center">
                  <AiOutlineWarning className="mr-1" /> No constraints
                </p>
              )}
              {relation.weight === null && (
                <p className="text-sm text-yellow-500 flex items-center">
                  <AiOutlineWarning className="mr-1" /> No weight assigned
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelationMappingResult;
