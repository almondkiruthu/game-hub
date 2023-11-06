import useData from './use-data';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>('/xgenres');

export default useGenres;
