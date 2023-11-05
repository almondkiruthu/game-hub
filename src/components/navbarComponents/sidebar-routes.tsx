import useData from '@/hooks/use-genres';

const SideBarRoutes = () => {
  const { data } = useData();
  return (
    <div className='flex flex-col w-full'>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarRoutes;
