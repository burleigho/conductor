import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
        <nav className="main-footer-nav">
            <ul className="main-footer__links">
                <li className="main-footer__link">
                    <a href="packages/index.html">Support</a>
                </li>
                <li className="main-footer__link">
                    <a href="customers/index.html">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>
  )
}