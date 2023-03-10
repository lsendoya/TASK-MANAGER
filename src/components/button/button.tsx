import { PropsButton } from '@/types/components';
import { Button } from '@chakra-ui/react';

export const ButtonComponent = ({ text, style, ...props }: PropsButton) => {
  return (
    <Button {...style} {...props}>
      {text}
    </Button>
  );
};
