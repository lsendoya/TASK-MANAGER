import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, IconButton, MenuList, Flex, Box, useMediaQuery } from '@chakra-ui/react';
import { ItemMenu } from '../menu-item';
import { Link } from '../link';
import { menuOptionsHome } from '@/constants/menu-list';
import  {useBoolean} from '@chakra-ui/react';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MenuItems = menuOptionsHome.map((item, index) => (
  (
    <li>
      <ItemMenu key={index} href={item.href} text={item.text}/>
    </li>
  )
));

const MenuOptions = menuOptionsHome.map((item, index) => (
  <Link key={index} href={item.href} text={item.text} />
));

const ItemsMenu = () => (
  <Box className="flex-row ml-10 max-w-sm flex-1 items-center  justify-between">{MenuOptions}</Box>
);

const Logo = () => {
  return (
    <Box className="flex-1">
      <a href="/" className="btn-ghost btn text-xl normal-case">
        <img src="/logo.svg" alt="Logo" width="150" height="50" />
      </a>
    </Box>
  );
};

//TODO: ALOJAR EN UN COMPONENTE
const ItemsMenuMobile = () => {
  const [flag, setFlag] = useBoolean()
  return (
    <div className='bg-red-100'>
    <button onClick={setFlag.toggle}>
      {flag ? <IoClose /> : <FaBars />}
    </button>
      {flag && (
        <ul>
        {MenuItems}
      </ul>
      )}
    
  </div>

  );
};

export const NavBar = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Box className="flex">
      <Logo />
      {isLargerThan768 ? <ItemsMenu /> : <ItemsMenuMobile />}
    </Box>
  );
};
