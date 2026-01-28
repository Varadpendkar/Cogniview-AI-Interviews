import apiClient from './client';

export const callsApi = {
  // Register a call
  registerCall: async (payload: { interviewer_id: string; dynamic_data: any }) => {
    const response = await apiClient.post('/api/calls/register-call', payload);
    return response.data;
  },

  // Get call details
  getCall: async (id: string) => {
    const response = await apiClient.post('/api/calls/get-call', { id });
    return response.data;
  },

  // Generate interview questions
  generateQuestions: async (payload: {
    name: string;
    objective: string;
    number: number;
    context: string;
  }) => {
    const response = await apiClient.post('/api/calls/generate-questions', payload);
    return response.data;
  },
};

export default callsApi;
