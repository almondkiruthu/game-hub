// import genre from '@/data/genre';

import useData from "./use-data";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData();

export default useGenres;
