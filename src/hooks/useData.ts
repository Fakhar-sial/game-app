import { AxiosRequestConfig, CanceledError } from 'axios';
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(
    () => {
      const controller = new AbortController();

      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then(res => setData(res.data.results))
        .catch(err => {
          if (err instanceof CanceledError) return;
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error };
};

export default useData;
