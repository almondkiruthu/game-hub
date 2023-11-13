import { useQuery } from '@tanstack/react-query';
import apiClient from '@/services/api-client';
import { FetchResponse } from './use-data';
import platforms from '@/data/platforms';

interface Platform {
  name: string;
  id: number;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
