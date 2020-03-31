import React from 'react';
import AppTheme from './AppTheme';

export default function Header(props) {
  const {setShow, show} = props;
  return (
    <header className="main-header">
        <div>
            <button className="main-header__button--toggle" onClick={() => setShow(!show)}>
              &#9776;
            </button>
            <a href="index.html" className="main-header__brand">
                Conductor
                </a>
        </div>
        <nav className="main-nav">
            <ul className="main-nav__items">
                <li className="main-nav__item">
                    <a href="packages/index.html">Service Objects</a>
                </li>
                <li className="main-nav__item">
                    <a href="customers/index.html">Settings</a>
                </li>
                <li className="main-nav__item main-nav__item--cta">
                    <a href="start-hosting/index.html">Login</a>
                </li>
                <li className="main-nav__item">
                  <AppTheme />
                </li>
            </ul>
        </nav>
    </header>
  )
}
