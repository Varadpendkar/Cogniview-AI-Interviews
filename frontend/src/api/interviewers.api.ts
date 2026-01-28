import apiClient from './client';

export interface Interviewer {
  id: string;
  name: string;
  agent_id: string;
  rapport: number;
  exploration: number;
  empathy: number;
  speed: number;
  image: string;
  description: string;
  audio: string;
}

export const interviewersApi = {
  // Get all interviewers
  getAll: async (clientId?: string) => {
    const response = await apiClient.get('/api/interviewers', {
      params: { clientId },
    });
    return response.data;
  },

  // Get single interviewer
  getById: async (id: string) => {
    const response = await apiClient.get(`/api/interviewers/${id}`);
    return response.data;
  },

  // Create interviewer
  create: async () => {
    const response = await apiClient.post('/api/interviewers/create');
    return response.data;
  },
};

export default interviewersApi;
