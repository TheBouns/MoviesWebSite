import "./navbarComponent.css";
import { FaUser } from "react-icons/fa";
export const NavbarComponent = () => {
  return (
    <nav>
      <ul>
        <li>HOME</li>
        <li>MOVIES</li>
        <li>SERIES</li>
        <li>ADD+</li>
      </ul>
      <div className="search-and-user-info">
        <form>
          <input type="search" placeholder="Looking for..." />
          <button className="nav-search">Search</button>
        </form>

        <FaUser className="user-icon" />
      </div>
    </nav>
  );
};
