import './index.css'
import { Link } from "react-router-dom";

const Home = () => {

  const handleLogout = () => {
		localStorage.removeItem("token");
    localStorage.removeItem("user");
		window.location.reload();
	};

  const user = localStorage.getItem('user');

  var userlink = '/'+user


  return (
    <div className="home">
        <h1>Welcome back, {user}</h1>
        <Link to={userlink} className="create">MY PAGE</Link>
        <Link to="/dashboard" className="create">CONFIGURE PAGE</Link>
        <Link to="/sanchez" className="create">OWNER 😎🤞</Link>
        <a className="LogOut" onClick={handleLogout}>
					Logout
				</a>
    </div>
  );
}
 
export default Home;
