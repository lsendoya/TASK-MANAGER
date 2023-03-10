import { useFormContext } from 'react-hook-form';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';
import { PropsSelect } from '@/types/components';

export function SelectComponent({
  name,
  value,
  label,
  options,
  variant = 'primary',
  ...rest
}: PropsSelect) {
  const { register } = useFormContext();

  return (
    <FormControl>
      {label && (
        <FormLabel textColor={variant === 'primary' ? 'blue.400' : ''} fontSize={'lg'}>
          {label}
        </FormLabel>
      )}
      <Select defaultValue={value} {...register(name, { required: true })} {...rest}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
