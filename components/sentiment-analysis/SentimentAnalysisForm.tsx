import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFileAlt, FaLanguage, FaLink, FaSpinner } from 'react-icons/fa';
import { useState, Suspense } from 'react';
import { SentimentResults } from './SentimentAnalysisResult';
import api from '@/lib/axiosConfig';

const inputDataSchema = z.object({
  topic: z.string().min(1, { message: 'Topic is required 📝' }),
  file_url: z.string().url({ message: 'Must be a valid URL 🌐' }),
  file_type: z.enum(
    [
      'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
      'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'
    ],
    { message: 'Please select a valid file type 📂' }
  ),
  lang: z.enum(
    ['en', 'es', 'fr', 'de', 'it', 'zh', 'jp'],
    { message: 'Please select a valid language 🌍' }
  ),
});

type FormData = z.infer<typeof inputDataSchema>;

export default function SentimentAnalysisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseData, setResponseData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(inputDataSchema),
  });

  const onSubmit = async (data: FormData) => {
    setResponseData(null)
    setIsSubmitting(true);

    try {
      const response = await api.post('/sentiment-analysis', data);

      toast.success("Form submitted successfully! 🎉", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });

      setResponseData(response.data);
    } catch (error) {
      toast.error('Failed to retrieve sentiment analysis data 🚫');
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg animate-fade-in-up transition-all mb-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Sentiment Analysis 😃</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Topic
            </label>
            <input
              id="topic"
              type="text"
              placeholder="Enter the main topic"
              {...register('topic')}
              className={`w-full px-4 py-2 border ${errors.topic ? 'border-red-500' : 'border-gray-300'} rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100`}
            />
            {errors.topic?.message && <p className="text-red-500 text-sm mt-1">{errors.topic.message} 😟</p>}
          </div>

          <div>
            <label htmlFor="file_url" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <FaLink className="inline mr-2" /> File URL
            </label>
            <input
              id="file_url"
              type="url"
              placeholder="https://example.com/file"
              {...register('file_url')}
              className={`w-full px-4 py-2 border ${errors.file_url ? 'border-red-500' : 'border-gray-300'} rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100`}
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
              className={`w-full px-4 py-2 border ${errors.file_type ? 'border-red-500' : 'border-gray-300'} rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100`}
            >
              <option value="">Select file type</option>
              {['pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml', 'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url'].map((type) => (
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
              className={`w-full px-4 py-2 border ${errors.lang ? 'border-red-500' : 'border-gray-300'} rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100`}
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
            className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md font-medium transition-all transform hover:bg-blue-700 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
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

      <ToastContainer />

      {responseData && (
        <Suspense fallback={<div>Loading results...</div>}>
          <SentimentResults data={responseData} />
        </Suspense>
      )}
    </div>
  );
}
