import { PropsLoading } from '@/types/components';
import { Flex, Spinner } from '@chakra-ui/react';

export const Loading = ({ isLoading, children }: PropsLoading) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100vh'}>
      <Spinner />
    </Flex>
  );
};
