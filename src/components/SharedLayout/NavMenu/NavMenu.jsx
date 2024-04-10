import React from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import { NavMenuList, NavigationLink } from "./NavMenu.styled";

const NavMenu = ({ isLogin }) => {
  return (
    <div>
      <NavMenuList>
        <li>
          <NavigationLink to={"/home"}>Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to={"/teachers"}>Teachers</NavigationLink>
        </li>
        {isLogin && (
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
