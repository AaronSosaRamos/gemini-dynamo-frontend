import React, { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineFileText, AiOutlineLink, AiOutlineGlobal, AiOutlineBulb } from 'react-icons/ai';
import api from '@/lib/axiosConfig';

const RelationMappingResult = React.lazy(() => import('./RelationMappingResult'));

const relationMappingSchema = z.object({
  topic: z.string().min(1, { message: 'Please enter the main topic 💡' }),
  file_url: z.string().url({ message: 'Must be a valid URL 🌐' }),
  file_type: z.enum([
    'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml', 'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
  ], { message: 'Please select a valid file type 📂' }),
  lang: z.enum(['en', 'es', 'fr', 'de', 'it', 'zh', 'jp'], { message: 'Please select a valid language 🌍' }),
});

type RelationMappingInput = z.infer<typeof relationMappingSchema>;

const RelationMappingForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [relationMappingData, setRelationMappingData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RelationMappingInput>({
    resolver: zodResolver(relationMappingSchema),
  });

  const onSubmit = async (data: RelationMappingInput) => {
    setShowResults(false);
    setLoading(true);
    
    try {
      const response = await api.post('/relation-mapping', data);

      toast.success("Form submitted successfully! 🎉", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });

      setRelationMappingData(response.data); 
      setShowResults(true);
    } catch (error) {
      toast.error('Failed to retrieve relation mapping data 🚫');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-300 py-10">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Relation Mapping 📊</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <label htmlFor="topic" className="block text-sm font-medium mb-1 flex items-center text-gray-800 dark:text-gray-300">
              <AiOutlineBulb className="mr-2 text-indigo-500" /> Main Topic
            </label>
            <input
              id="topic"
              type="text"
              className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
              placeholder="Enter the main topic"
              {...register('topic')}
            />
            {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic.message}</p>}
          </div>

          <div className="relative">
            <label htmlFor="file_url" className="block text-sm font-medium mb-1 flex items-center text-gray-800 dark:text-gray-300">
              <AiOutlineLink className="mr-2 text-indigo-500" /> File URL
            </label>
            <input
              id="file_url"
              type="text"
              className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
              placeholder="https://example.com/yourfile"
              {...register('file_url')}
            />
            {errors.file_url && <p className="text-red-500 text-sm mt-1">{errors.file_url.message}</p>}
          </div>

          <div className="relative">
            <label htmlFor="file_type" className="block text-sm font-medium mb-1 flex items-center text-gray-800 dark:text-gray-300">
              <AiOutlineFileText className="mr-2 text-indigo-500" /> File Type
            </label>
            <select
              id="file_type"
              className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
              {...register('file_type')}
            >
              <option value="">Select file type 📁</option>
              {[
                'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml', 'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
              ].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.file_type && <p className="text-red-500 text-sm mt-1">{errors.file_type.message}</p>}
          </div>

          <div className="relative">
            <label htmlFor="lang" className="block text-sm font-medium mb-1 flex items-center text-gray-800 dark:text-gray-300">
              <AiOutlineGlobal className="mr-2 text-indigo-500" /> Language
            </label>
            <select
              id="lang"
              className="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
              {...register('lang')}
            >
              <option value="">Select language 🌍</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="zh">Chinese</option>
              <option value="jp">Japanese</option>
            </select>
            {errors.lang && <p className="text-red-500 text-sm mt-1">{errors.lang.message}</p>}
          </div>

          <button
            type="submit"
            className={`w-full flex justify-center items-center bg-indigo-600 text-white p-3 rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-indigo-700 hover:shadow-xl hover:scale-105'
              }`}
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            ) : 'Submit 🚀'}
          </button>
        </form>

        <ToastContainer />
      </div>

      {showResults && relationMappingData && (
        <Suspense fallback={<div className="flex justify-center mt-8"><svg className="animate-spin h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg></div>}>
          <div className='mt-10'>
            <RelationMappingResult data={relationMappingData} />
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default RelationMappingForm;
