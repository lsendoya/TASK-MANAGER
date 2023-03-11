import { HamburgerIcon } from '@chakra-ui/icons';
import { menuOptionsHome } from '@c';
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Flex,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';

import { ItemMenu } from './item-menu';
import { Link } from './';

const MenuItems = menuOptionsHome.map((item, index) => (
  <ItemMenu key={index} href={item.href}>
    {item.text}
  </ItemMenu>
));

const MenuOptions = menuOptionsHome.map((item, index) => (
  <Link key={index} href={item.href}>
    {item.text}
  </Link>
));

export const NavBar = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const Options = menuOptionsHome;

  return (
    <Flex align="center" justify="space-between" wrap="wrap" p={6} bg="gray.500" color="white">
      <Box>
        <a href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </Box>
      {isLargerThan768 ? (
        <Box>
          <Box ml={4}>
            <a href="#">Sign Up</a>
          </Box>
          <Box ml={4}>
            <a href="#">Sign In</a>
          </Box>
          <Box ml={4}>
            <a href="#">Contact Us</a>
          </Box>
          <Box ml={4}>
            <a href="#">Blog</a>
          </Box>
        </Box>
      ) : (
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <a href="#">Sign Up</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Sign In</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Contact Us</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Blog</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Flex>
  );
};
