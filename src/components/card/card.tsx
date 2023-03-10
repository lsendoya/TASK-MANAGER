import { Card, CardBody, CardHeader } from '@chakra-ui/react';
import { PropsCard } from '@/types/components';

export const CardComponent = ({ title, children }: PropsCard) => {
  return (
    <Card variant="filled" mt="10px">
      <CardHeader fontWeight="bold" textAlign="left">
        {title}
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
