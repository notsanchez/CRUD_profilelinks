import { Link } from "react-router-dom";

const Navbar = () => {

  const user = localStorage.getItem('user');

  return (
    <nav className="navbar">
      <h4>Hello, {user}</h4>
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