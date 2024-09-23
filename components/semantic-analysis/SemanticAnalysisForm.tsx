// components/SemanticAnalysisForm.jsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFileAlt, FaLanguage, FaLink, FaSpinner } from 'react-icons/fa';
import { useState } from 'react';

// Esquema de validación con Zod
const inputDataSchema = z.object({
  file_url: z.string().url({ message: 'Must be a valid URL 🌐' }),
  file_type: z.enum(
    [
      'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
      'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
    ], { message: 'Please select a valid file type 📂' }
  ),
  lang: z.enum(
    ['en', 'es', 'fr', 'de', 'it', 'zh', 'jp'],
    { message: 'Please select a valid language 🌍' }
  ),
});

export default function SemanticAnalysisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(inputDataSchema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    toast.success('📝 Form submitted successfully!');
    console.log('Form Data:', data);

    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg animate-fade-in-up transition-all">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Semantic Analysis 🧠</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Campo para el URL del archivo */}
        <div>
          <label htmlFor="file_url" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaLink className="inline mr-2" /> File URL
          </label>
          <input
            id="file_url"
            type="url"
            placeholder="https://example.com/file"
            {...register('file_url')}
            className={`w-full px-4 py-2 border ${errors.file_url ? 'border-red-500' : 'border-gray-300'} rounded-md dark:bg-gray-700 dark:border-gray-600`}
          />
          {errors.file_url && <p className="text-red-500 text-sm mt-1">{errors.file_url.message} 😟</p>}
        </div>

        {/* Selector para el tipo de archivo */}
        <div>
          <label htmlFor="file_type" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaFileAlt className="inline mr-2" /> File Type
          </label>
          <select
            id="file_type"
            {...register('file_type')}
            className={`w-full px-4 py-2 border ${errors.file_type ? 'border-red-500' : 'border-gray-300'} rounded-md dark:bg-gray-700 dark:border-gray-600`}
          >
            <option value="">Select file type</option>
            {[
              'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
              'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
            ].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.file_type && <p className="text-red-500 text-sm mt-1">{errors.file_type.message} 🧐</p>}
        </div>

        {/* Selector para el idioma */}
        <div>
          <label htmlFor="lang" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaLanguage className="inline mr-2" /> Language
          </label>
          <select
            id="lang"
            {...register('lang')}
            className={`w-full px-4 py-2 border ${errors.lang ? 'border-red-500' : 'border-gray-300'} rounded-md dark:bg-gray-700 dark:border-gray-600`}
          >
            <option value="">Select language</option>
            {['en', 'es', 'fr', 'de', 'it', 'zh', 'jp'].map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          {errors.lang && <p className="text-red-500 text-sm mt-1">{errors.lang.message} 🤔</p>}
        </div>

        {/* Botón para enviar el formulario */}
        <button
          type="submit"
          className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md font-medium transition-all transform hover:bg-blue-700 ${
            isSubmitting ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="inline mr-2 animate-spin" /> Submitting...
            </>
          ) : (
            'Submit 📤'
          )}
        </button>
      </form>
    </div>
  );
}
