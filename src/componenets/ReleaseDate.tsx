import { Badge } from "@chakra-ui/react";

interface Props {
  releaseDate: string;
}

const ReleaseDate = ({ releaseDate }: Props) => {
  return <Badge borderRadius={3}>{releaseDate}</Badge>;
};

export default ReleaseDate;
