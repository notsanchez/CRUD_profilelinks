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
        <Link to={userlink} className="create">MY PAGE</Link>
        <Link to="/create" className="create">DASHBOARD</Link>
        <Link to="/sanchez" className="create">OWNER 😎🤞</Link>
        <a className="LogOut" onClick={handleLogout}>
					Logout
				</a>
    </div>
  );
}
 
export default Home;
