import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-blue-50">
      <nav className="flex gap-4">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/archive" className="">
          Archive
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
