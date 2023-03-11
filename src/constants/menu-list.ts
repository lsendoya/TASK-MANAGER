interface MenuOption {
  href: string;
  text: string;
}

export const menuOptionsHome :MenuOption[] = [
  { href: '/signin', text: 'Sign In'},
  { href: '/contact', text: 'Contact Us'},
  { href: '/blog', text: 'Blog', index: 2 },
  { href: '/signup', text: 'Sign Up' },
] ;

