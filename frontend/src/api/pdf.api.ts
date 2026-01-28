import apiClient from './client';

export const pdfApi = {
  // Parse PDF
  parsePdf: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await apiClient.post('/api/pdf/parse', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export default pdfApi;
