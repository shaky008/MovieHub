import { Badge } from "@chakra-ui/react";

interface Props {
  releaseDate?: string;
  first_air_date?: string;
}

const ReleaseDate = ({ releaseDate, first_air_date }: Props) => {
  const displayDate = releaseDate || first_air_date;
  return <Badge borderRadius={3}>{displayDate}</Badge>;
};

export default ReleaseDate;
