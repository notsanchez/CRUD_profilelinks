import './index.css'
import { Link } from "react-router-dom";

const Home = () => {

  const user = localStorage.getItem('user');

  var userlink = '/'+user


  return (
    <div className="home">
        <title>Home | sanchezroot.wtf</title>
        <h1>Welcome back, {user}</h1>
        <Link to={userlink} className="create">MY PAGE</Link>
        <Link to="/dashboard" className="create">DASHBOARD</Link>
        <Link to="/sanchez" className="create">OWNER😎</Link>
    </div>
  );
}
 
export default Home;
