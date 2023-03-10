import { Box } from '@chakra-ui/react';
import { Head } from '@/components/head';
import { PropsMainLayout } from '@/types/components';

const MainLayout = ({ children }: PropsMainLayout) => {
  return (
    <>
      <Head />
      <Box>{children}</Box>
    </>
  );
};

export default MainLayout;
