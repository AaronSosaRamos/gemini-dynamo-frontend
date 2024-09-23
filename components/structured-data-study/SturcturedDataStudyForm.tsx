import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineFileText, AiOutlineLink, AiOutlineGlobal } from 'react-icons/ai';

const inputDataSchema = z.object({
  file_url: z.string().url({ message: 'Must be a valid URL 🌐' }),
  file_type: z.enum([
    'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
    'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
  ], { message: 'Please select a valid file type 📂' }),
  lang: z.enum(['en', 'es', 'fr', 'de', 'it', 'zh', 'jp'], { message: 'Please select a valid language 🌍' }),
});

type InputData = z.infer<typeof inputDataSchema>;

const StructuredDataStudyForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<InputData>({
    resolver: zodResolver(inputDataSchema),
  });

  const onSubmit = (data: InputData) => {
    toast.success('Data successfully submitted 🎉');
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Upload Your File 📤</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* File URL Field */}
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

          {/* File Type Select */}
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
                'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
                'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
              ].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.file_type && <p className="text-red-500 text-sm mt-1">{errors.file_type.message}</p>}
          </div>

          {/* Language Select */}
          <div className="relative">
            <label htmlFor="lang" className="block text-sm font-medium mb-1 flex items-center text-gray-800 dark:text-gray-300">
              <AiOutlineGlobal className="mr-2 text-indigo-500" /> Document Language
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-indigo-600 text-white p-3 rounded-md shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Submit 🚀
          </button>
        </form>

        {/* Toast Notifications */}
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default StructuredDataStudyForm;
