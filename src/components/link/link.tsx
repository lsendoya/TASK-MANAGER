import React from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

type LinkProps = {
  href: string;
  text: string;
};

export const LinkComponenet: React.FC<LinkProps> = ({ text, href }: LinkProps) => {
  return (
    <Box>
      <Link href={href}>{text}</Link>
    </Box>
  );
};
