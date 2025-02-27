import { NavLink } from "react-router-dom";

const NavBar = () => {
  const style = {
    margin: "10px",
    fontSize: "20px",
  };
  return (
    <div>
      <NavLink style={style} to="/">
        Home
      </NavLink>
      <NavLink style={style} to="/pastes">
        Notes
      </NavLink>
    </div>
  );
};

export default NavBar;
