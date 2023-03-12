import Link from 'next/link';

type MenuItemProps = {
  href: string;
  text: string;
};

export const MenuComponent: React.FC<MenuItemProps> = ({ href, text }: MenuItemProps) => {
  return (
    <>
      <Link href={href}>{text}</Link>
    </>
  );
};
