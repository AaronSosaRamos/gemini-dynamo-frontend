import { z } from 'zod';

export const videoAnalysisSchema = z.object({
  file_url: z
    .string()
    .url('Invalid URL format')
    .nonempty('File URL is required'),
  file_type: z.enum([
    'pdf', 'csv', 'txt', 'md', 'url', 'pptx', 'docx', 'xls', 'xlsx', 'xml',
    'gdoc', 'gsheet', 'gslide', 'gpdf', 'img', 'youtube_url',
  ]),
  language: z.enum(['en', 'es', 'fr', 'de', 'it']),
  analysis_depth: z.enum(['standard', 'deep', 'comprehensive']),
  additional_comments: z.string().optional(),
});

export type VideoAnalysisFormData = z.infer<typeof videoAnalysisSchema>;
