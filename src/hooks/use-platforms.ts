import { useQuery } from '@tanstack/react-query';

import platforms from '@/data/platforms';
import APIClient from '@/services/api-client';

export interface Platform {
  name: string;
  id: number;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
