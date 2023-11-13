import { useQuery } from '@tanstack/react-query';
import apiClient from '@/services/api-client';

interface Platform {
  name: string;
  id: number;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient
      .get<Platform[]>('/platforms/lists/parents')
      .then((res) => res.data),
  });

export default usePlatforms;
