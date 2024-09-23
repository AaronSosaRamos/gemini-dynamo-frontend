import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineFileText, AiOutlineLink, AiOutlineGlobal } from 'react-icons/ai';

const inputDataSchema = z.object({
  file_url: z.string().url({ message: 'Must be a valid URL 🌐' }),
  file_type: z.enum(['csv', 'json', 'xls', 'xlsx', 'xml'], { message: 'Please select a valid file type 📂' }),
  lang: z.string().min(2, { message: 'Language code should be at least 2 characters ✍️' }),
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
    <div className="max-w-md mx-auto mt-10 mb-10 p-5 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-6">Upload Your File 📤</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        <div className="relative">
          <label htmlFor="file_url" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <AiOutlineLink className="mr-2 text-indigo-500" /> File URL
          </label>
          <input
            id="file_url"
            type="text"
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105"
            placeholder="https://example.com/yourfile"
            {...register('file_url')}
          />
          {errors.file_url && <p className="text-red-500 text-sm mt-1">{errors.file_url.message}</p>}
        </div>

        <div className="relative">
          <label htmlFor="file_type" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <AiOutlineFileText className="mr-2 text-indigo-500" /> File Type
          </label>
          <select
            id="file_type"
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105"
            {...register('file_type')}
          >
            <option value="">Select file type 📁</option>
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
            <option value="xls">XLS</option>
            <option value="xlsx">XLSX</option>
            <option value="xml">XML</option>
          </select>
          {errors.file_type && <p className="text-red-500 text-sm mt-1">{errors.file_type.message}</p>}
        </div>

        <div className="relative">
          <label htmlFor="lang" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <AiOutlineGlobal className="mr-2 text-indigo-500" /> Document Language
          </label>
          <input
            id="lang"
            type="text"
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105"
            placeholder="e.g., en, es, fr"
            {...register('lang')}
          />
          {errors.lang && <p className="text-red-500 text-sm mt-1">{errors.lang.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center bg-indigo-600 text-white p-3 rounded-md shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Submit 🚀
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default StructuredDataStudyForm;
