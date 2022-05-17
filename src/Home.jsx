import './index.css'
import { Link } from "react-router-dom";

const Home = () => {

  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  return (
    
    <div className="home">
        <Link to="/create" className="create">CREATE PAGE</Link>
        <Link to="/sanchez" className="create">OWNER</Link>
        <a className="LogOut" onClick={handleLogout}>
					Logout
				</a>
    </div>
  );
}
 
export default Home;
