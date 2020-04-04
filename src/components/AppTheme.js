import React, { useContext } from 'react';
import { ReactComponent as Sun } from '../icons/sun.svg';
import { ReactComponent as Moon } from '../icons/moon.svg';
import ThemeContext from './ThemeContext';

export default function AppTheme() {
  const { state, setState} = useContext(ThemeContext)
  return (
    <button className={ state ?  "main-nav__toggle-dark" : "main-nav__toggle" } onClick={() => setState(!state)}>
       <Sun className={state ? "main-nav__item--icons" : "main-nav__item--icons-light"}/>
       <Moon className={state ? "main-nav__item--icons" : "main-nav__item--icons-dark"}/>
    </button>
  )
}