import { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { videoAnalysisSchema, VideoAnalysisFormData } from '../schemas/validationSchema';
import api from '../lib/axiosConfig';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

export default function VideoAnalysisForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VideoAnalysisFormData>({
        resolver: zodResolver(videoAnalysisSchema),
    });

    const onSubmit = async (data: VideoAnalysisFormData) => {
        setIsLoading(true);
        setResult(null);
        try {
            const response = await api.post('/retrieve-key-concepts', data);
            setResult(response.data);
            toast.success('Key concepts retrieved successfully!');
        } catch (error) {
            toast.error('Failed to retrieve key concepts.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    Video Analysis Request
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="file_url" className="block text-sm font-medium text-gray-700">
                            File URL
                        </label>
                        <input
                            type="text"
                            id="file_url"
                            {...register('file_url')}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.file_url && (
                            <p className="mt-1 text-sm text-red-600">{errors.file_url.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="file_type" className="block text-sm font-medium text-gray-700">
                            File Type
                        </label>
                        <select
                            id="file_type"
                            {...register('file_type')}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select file type</option>
                            {[
                                'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
                                'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url',
                            ].map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        {errors.file_type && (
                            <p className="mt-1 text-sm text-red-600">{errors.file_type.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                            Language
                        </label>
                        <select
                            id="language"
                            {...register('language')}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="it">Italian</option>
                        </select>
                        {errors.language && (
                            <p className="mt-1 text-sm text-red-600">{errors.language.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="analysis_depth" className="block text-sm font-medium text-gray-700">
                            Analysis Depth
                        </label>
                        <select
                            id="analysis_depth"
                            {...register('analysis_depth')}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="standard">Standard</option>
                            <option value="deep">Deep</option>
                            <option value="comprehensive">Comprehensive</option>
                        </select>
                        {errors.analysis_depth && (
                            <p className="mt-1 text-sm text-red-600">{errors.analysis_depth.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="additional_comments" className="block text-sm font-medium text-gray-700">
                            Additional Comments
                        </label>
                        <textarea
                            id="additional_comments"
                            {...register('additional_comments')}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            rows={4}
                        />
                        {errors.additional_comments && (
                            <p className="mt-1 text-sm text-red-600">{errors.additional_comments.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Submit Request
                    </button>
                </form>

                <div className="mt-6">
                    <Suspense fallback={<Spinner />}>
                        {isLoading ? <Spinner /> : result && <pre>{JSON.stringify(result, null, 2)}</pre>}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
