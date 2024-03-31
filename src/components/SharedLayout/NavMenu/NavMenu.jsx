import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import ColorPicker from "../ColorPicker/ColorPicker";
import { NavMenuList, NavigationLink } from "./NavMenu.styled";

const NavMenu = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <div>
      <NavMenuList>
        <li>
          <NavigationLink to={"/home"}>Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to={"/teachers"}>Teachers</NavigationLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavigationLink to={"/favorites"}>Favorites</NavigationLink>
          </li>
        )}
        <li>
          <ColorPicker />
        </li>
      </NavMenuList>
    </div>
  );
};

export default NavMenu;
