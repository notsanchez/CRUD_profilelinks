import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>braindead.jsx</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="create">New Page</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;