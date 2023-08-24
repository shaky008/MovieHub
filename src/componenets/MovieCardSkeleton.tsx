import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const MovieCardSkeleton = () => {
  return (
    <Card width="275px" borderRadius={10} overflow="hidden">
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
