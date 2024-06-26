import { Link, useLocation } from 'react-router-dom';

// Object destructuring assignment to pluck off variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/" // This is the base tab and goes to 'About' page 
          // This is a conditional (ternary) operator that checks to see if the current page is "About"
          // If it is, set the current page to 'nav-link-active', otherwise set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          // Check to see if the currentPage is `Projects`, and if so use the active link class from bootstrap. Otherwise, set it to a normal nav-link
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Picture"
          // Check to see if the currentPage is `Picture`, and if so use the active link class from bootstrap. Otherwise, set it to a normal nav-link
          className={currentPage === '/Picture' ? 'nav-link active' : 'nav-link'}
        >
          Picture
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume" // This is the base tab and goes to 'Resume' page 
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, set the current page to 'nav-link-active', otherwise set it to 'nav-link'
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so use the active link class from bootstrap. Otherwise, set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;