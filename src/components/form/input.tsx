import { PropsInput } from '@/types/components';
import { FormControl, FormLabel, Input as InpuntChakra } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export function Input({ name, label, type, ...rest }: PropsInput) {
  const { register } = useFormContext();

  return (
    <FormControl>
      {label && <FormLabel fontSize={'lg'}>{label}</FormLabel>}
      <InpuntChakra type={type} {...rest} {...register(name)} />
    </FormControl>
  );
}
