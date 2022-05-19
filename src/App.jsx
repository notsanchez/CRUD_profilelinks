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
    <>
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
            <Route exact path="/dashboard">
              <Navbar/>
              <Create />
            </Route>
            <Route path="/:id">
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
              <Profile />
            </Route>
            <Route exact path="/dashboard">
              <Login/>
            </Route>
            <Route exact path="/" render={()=>(
              <Home/> ? <Redirect to="/login" /> : <Login />         
            )} />
		      </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
