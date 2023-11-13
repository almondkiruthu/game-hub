import genre from '@/data/genres';

import apiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from './use-data';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
