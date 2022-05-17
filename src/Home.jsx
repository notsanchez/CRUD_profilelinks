import './index.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
        <Link to="/create" className="create">CREATE PAGE</Link>
        <Link to="/sanchez" className="create">OWNER</Link>
    </div>
  );
}
 
export default Home;
