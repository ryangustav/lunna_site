// components/Nav.tsx
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

/**
 * The navbar component, which renders a simple navigation menu.
 *
 * The menu has links to the home page, the shop page, and the support discord
 * server.
 *
 * The component uses the `useLocation` hook from `react-router-dom` to
 * determine the current path of the browser, and sets the `active` class on
 * the link that matches the current path.
 *
 * @returns {JSX.Element} The navbar component.
 */
const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav-content container">
        <Link to="/" className="nav-brand">Lunna</Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/Vip" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>
            Vip
          </Link>
          <Link to="/LunnarCoins" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>
            LunnarCoins
          </Link>
          <a href="https://discord.gg/DaUhFcjJfH" className="nav-link">Support</a>
        </div>
        <button className="mobile-menu">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;