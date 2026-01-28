import apiClient from './client';

export interface Interview {
  id: string;
  name: string;
  objective: string;
  url: string;
  readable_slug?: string;
  is_active: boolean;
  created_at: string;
  user_id?: string;
  organization_id?: string;
}

export interface CreateInterviewPayload {
  interviewData: Partial<Interview>;
  organizationName?: string;
}

export const interviewsApi = {
  // Create interview
  create: async (payload: CreateInterviewPayload) => {
    const response = await apiClient.post('/api/interviews/create', payload);
    return response.data;
  },

  // Get all interviews
  getAll: async (userId: string, organizationId: string) => {
    const response = await apiClient.get('/api/interviews', {
      params: { userId, organizationId },
    });
    return response.data;
  },

  // Get interview by ID
  getById: async (id: string) => {
    const response = await apiClient.get(`/api/interviews/${id}`);
    return response.data;
  },

  // Update interview
  update: async (id: string, payload: Partial<Interview>) => {
    const response = await apiClient.put(`/api/interviews/${id}`, payload);
    return response.data;
  },

  // Delete interview
  delete: async (id: string) => {
    const response = await apiClient.delete(`/api/interviews/${id}`);
    return response.data;
  },
};

export default interviewsApi;
