import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { movieGenres, error, isLoading } = useGenre();

  return (
    <ul>
      {movieGenres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
