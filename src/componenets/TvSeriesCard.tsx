import { Series } from "../hooks/useSeries";
import MediaCard from "./MediaCard";

interface Props {
  series: Series;
}

const TvSeriesCard = ({ series }: Props) => {
  return (
    <div>
      {
        <MediaCard
          title={series.original_name}
          posterPath={series.poster_path}
          item={series}
          averageVote={series.vote_average}
          releaseDate={series.first_air_date}
        />
      }
    </div>
  );
};

export default TvSeriesCard;
