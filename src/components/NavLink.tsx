import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  return (
    <a
      href={href}
      className={`
        ${mobile ? 'block py-2' : 'inline-block'}
        text-gray-200 hover:text-white transition-colors duration-200
        hover:underline decoration-2 underline-offset-4
      `}
    >
      {children}
    </a>
  );
};

export default NavLink;