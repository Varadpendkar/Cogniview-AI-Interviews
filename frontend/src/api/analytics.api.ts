import apiClient from './client';

export const analyticsApi = {
  // Analyze communication
  analyzeCommunication: async (transcript: string) => {
    const response = await apiClient.post('/api/analytics/analyze-communication', {
      transcript,
    });
    return response.data;
  },

  // Generate insights
  generateInsights: async (payload: any) => {
    const response = await apiClient.post('/api/analytics/generate-insights', payload);
    return response.data;
  },
};

export default analyticsApi;
