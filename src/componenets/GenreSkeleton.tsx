import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card>
      <Skeleton>
        <SkeletonText />
      </Skeleton>
    </Card>
  );
};

export default GenreSkeleton;
