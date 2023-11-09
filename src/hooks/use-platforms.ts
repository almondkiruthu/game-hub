import useData from './use-data';

interface Platform {
  name: string;
  id: number;
  slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
