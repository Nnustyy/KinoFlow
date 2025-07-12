import { NavLink } from 'react-router-dom';

const NavLinkItem = ({to, children}:{to:string, children:string}) => {
  return (
    <NavLink 
    to={to} 
    className={({ isActive }) => 
      `text-white px-4 py-2 rounded transition-colors ${
        isActive ? "bg-gradient-to-r from-purple-600 to-purple-900" : "hover:bg-purple-900/30"
      }`
    }
  >
    {children}
  </NavLink>
  );
};

export default NavLinkItem;