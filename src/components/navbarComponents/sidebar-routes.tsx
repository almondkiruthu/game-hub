import useGenres from '@/hooks/use-genres';

const SideBarRoutes = () => {
  const { genres } = useGenres();
  return (
    <div className='flex flex-col w-full'>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarRoutes;
