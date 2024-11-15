import axios from 'axios';
import type { Company } from '@/types/company';

export type { Company };

export interface APIError {
  message: string;
  status?: number;
}

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

interface AxiosErrorResponse {
  response?: {
    status?: number;
    data?: {
      message?: string;
    };
  };
}

function isAxiosError(error: unknown): error is AxiosErrorResponse {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error
  );
}

export async function searchCompanies(query: string): Promise<Company[]> {
  try {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const response = await api.get<Company[]>('/companies/search', {
      params: { q: query.trim() }
    });

    return response.data || [];
  } catch (error: unknown) {
    const apiError: APIError = {
      message: 'Failed to search companies'
    };

    if (isAxiosError(error)) {
      apiError.status = error.response?.status;
      apiError.message = error.response?.data?.message || apiError.message;
    }

    throw apiError;
  }
}

export async function getCompany(id: string): Promise<Company> {
  try {
    const response = await api.get<Company>(`/companies/${id}`);
    return response.data;
  } catch (error: unknown) {
    const apiError: APIError = {
      message: 'Failed to fetch company'
    };

    if (isAxiosError(error)) {
      apiError.status = error.response?.status;
      apiError.message = error.response?.data?.message || apiError.message;
    }

    throw apiError;
  }
}