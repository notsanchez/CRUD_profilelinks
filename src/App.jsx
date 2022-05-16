import Navbar from './components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
            <Route path="/create">
              <Navbar />
              <Create />
            </Route>
            <Route path="/:id">
              <Navbar />
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
