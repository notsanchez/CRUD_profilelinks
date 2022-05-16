import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={{ pathname: "https://twitter.com/sanchezscript" }} target="_blank">
        <h1>sanchezroot</h1>
      </Link>
      <div className="links">
        <Link to="/">HOME</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;