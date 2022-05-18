import Navbar from './components/Navbar';
import LogOutNavbar from './components/LogOutNavbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Create from './pages/Create';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {

  const user = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <div className="content">
        <Switch>
          {user && 
          <Switch>
            <Route exact path="/">
              <Navbar/>
              <Home />
            </Route>
            <Route path="/create">
              <Navbar/>
              <Create />
            </Route>
            <Route path="/:id">
              <Navbar />
              <Profile />
            </Route>
          </Switch>
          }
            <Route path="/signup">
              <LogOutNavbar/>
              <SignUp />
            </Route>
            <Route path="/login">
              <LogOutNavbar/>
              <Login />
            </Route>
            <Route path="/:id">
              <LogOutNavbar />
              <Profile />
            </Route>
            <Route exact path="/" render={()=>(
              <Home/> ? <Redirect to="/login" /> : <Login />         
            )} />
		      </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
