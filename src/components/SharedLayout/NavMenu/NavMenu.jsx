import React from 'react'
import { NavMenuList, NavigationLink } from './NavMenu.styled'

const NavMenu = () => {
  return (
    <div>
        <NavMenuList>
            <li>
                <NavigationLink to={'/home'}>Home</NavigationLink>
            </li>
            <li>
                <NavigationLink to={'/teachers'}>Teachers</NavigationLink>
            </li>
            <li>
                <NavigationLink to={'/favorites'}>Favorites</NavigationLink>
            </li>
        </NavMenuList>
    </div>
  )
}

export default NavMenu