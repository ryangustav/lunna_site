import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/**
 * Navigation component that renders the main navigation bar for the application.
 *
 * Utilizes React Router's `useLocation` to determine the current active route
 * and updates the active class on the corresponding navigation links. It also
 * includes a mobile menu button for toggling the visibility of the navigation
 * links on smaller screens.
 *
 * @component
 *
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */

const Nav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-content container">
        <Link to="/" className="nav-brand">Lunna</Link>

        {/* Menu de links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/Vip" className={`nav-link ${location.pathname === "/Vip" ? "active" : ""}`}>
            Vip
          </Link>
          <Link to="/LunnarCoins" className={`nav-link ${location.pathname === "/LunnarCoins" ? "active" : ""}`}>
            LunnarCoins
          </Link>
          <a href="https://discord.gg/DaUhFcjJfH" className="nav-link">Support</a>
        </div>

        {/* Botão do menu para mobile */}
        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </nav>
  );
};

export default Nav;
