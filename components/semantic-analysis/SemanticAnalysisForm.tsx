import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFileAlt, FaLanguage, FaLink, FaSpinner } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ResultsDisplay } from './SemanticAnalysisResult';

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

type FormData = z.infer<typeof inputDataSchema>;

export default function SemanticAnalysisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisData, setAnalysisData] = useState<any | null>(null);  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(inputDataSchema),
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    toast.success('📝 Form submitted successfully!');
    console.log('Form Data:', data);

    const mockAnalysisData = {
      input_text: 'inadvertently reflect societal prejudices. Additionally, LLMs require significant computational resources...',
      entities: [
        { text: 'LLMs', type: 'organization', start_char: 0, end_char: 4, confidence: null },
        { text: 'AI', type: 'organization', start_char: 204, end_char: 206, confidence: null },
        { text: 'healthcare', type: 'industry', start_char: 164, end_char: 174, confidence: null },
        { text: 'education', type: 'industry', start_char: 178, end_char: 187, confidence: null },
        { text: 'NLP', type: 'field', start_char: 688, end_char: 691, confidence: null },
      ],
      keywords: [
        { word: 'LLMs', importance: 0.9 },
        { word: 'bias', importance: 0.8 },
        { word: 'interpretability', importance: 0.7 },
        { word: 'transparency', importance: 0.7 },
        { word: 'healthcare', importance: 0.6 },
        { word: 'education', importance: 0.6 },
        { word: 'AI-driven innovation', importance: 0.5 },
        { word: 'natural language processing', importance: 0.5 },
      ],
      sentiment: { polarity: 0.1, subjectivity: 0.6 },
      language: 'es',
      confidence: 0.95,
      summary: 'El texto discute los desafíos y el impacto transformador de los Modelos de Lenguaje Grande (LLMs)...',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setAnalysisData(mockAnalysisData);  
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg animate-fade-in-up transition-all">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Semantic Analysis 🧠</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="file_url" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaLink className="inline mr-2" /> File URL
            </label>
            <input
              id="file_url"
              type="url"
              placeholder="https://example.com/file"
              {...register('file_url')}
              className={`w-full px-4 py-2 border ${
                errors.file_url ? 'border-red-500' : 'border-gray-300'
              } rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100`}
            />
            {errors.file_url?.message && <p className="text-red-500 text-sm mt-1">{errors.file_url.message} 😟</p>}
          </div>

          <div>
            <label htmlFor="file_type" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaFileAlt className="inline mr-2" /> File Type
            </label>
            <select
              id="file_type"
              {...register('file_type')}
              className={`w-full px-4 py-2 border ${
                errors.file_type ? 'border-red-500' : 'border-gray-300'
              } rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100`}
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
            {errors.file_type?.message && <p className="text-red-500 text-sm mt-1">{errors.file_type.message} 🧐</p>}
          </div>

          <div>
            <label htmlFor="lang" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaLanguage className="inline mr-2" /> Language
            </label>
            <select
              id="lang"
              {...register('lang')}
              className={`w-full px-4 py-2 border ${
                errors.lang ? 'border-red-500' : 'border-gray-300'
              } rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100`}
            >
              <option value="">Select language</option>
              {['en', 'es', 'fr', 'de', 'it', 'zh', 'jp'].map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            {errors.lang?.message && <p className="text-red-500 text-sm mt-1">{errors.lang.message} 🤔</p>}
          </div>

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

      {analysisData && (
        <motion.div
          className="mt-10 w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ResultsDisplay data={analysisData} />
        </motion.div>
      )}
    </div>
  );
}
