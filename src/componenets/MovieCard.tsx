import MediaCard from "./MediaCard";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div>
      {
        <MediaCard
          title={movie.original_title}
          posterPath={movie.poster_path}
          item={movie}
          averageVote={movie.vote_average}
          releaseDate={movie.release_date}
        />
      }
    </div>
  );
};

export default MovieCard;
