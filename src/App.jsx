import Navbar from './components/Navbar';
import NavbarLog from './components/NavbarLog';
import Home from './Home';
import About from './pages/About';
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
              <NavbarLog/>
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <NavbarLog/>
              <Create />
            </Route>
            <Route exact path="/about">
              <NavbarLog/>
              <About />
            </Route>
            <Route path="/:id">
              <Profile />
            </Route>
          </Switch>
          }
            <Route path="/signup">
              <Navbar/>
              <SignUp />
            </Route>
            <Route path="/login">
              <Navbar/>
              <Login />
            </Route>
            <Route path="/about">
              <Navbar/>
              <About />
            </Route>
            <Route path="/:id">
              <Profile />
            </Route>
            <Route exact path="/dashboard">
              <Login/>
            </Route>
            <Route exact path="/" render={()=>(
              <Home/> ? <Redirect to="/about" /> : <About/>         
            )} />
		      </Switch>
        </div>
      </div>
    </Router>
      </>
  );
}

export default App;
