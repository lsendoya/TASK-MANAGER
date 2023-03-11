import Link from 'next/link';
import { MenuItem } from '@chakra-ui/react';

type MenuItemProps = {
  href: string;
  text: string;
};

export const MenuComponent = ({ href, text }: MenuItemProps) => {
  return (
    <MenuItem>
      <Link href={href}>{text}</Link>
    </MenuItem>
  );
};
