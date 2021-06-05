import './App.css';
import TopBar from './components/TopBar/TopBar'
import Home from './components/pages/Home/Home'
import Single from './components/pages/single/Single';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Write from './components/pages/write/Write';


function App() {
  // const user = false
  return (
    <div className="App">
       <Router>
       <TopBar />
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>

          <Route path="/settings">
          <Settings />
          </Route>

          <Route path="/login">
          <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path='/write'>
            <Write />
          </Route>

          <Route path="/post/:id">
          <Single />
          </Route>
          
        </Switch>
    </Router>
      </div>
  );
}

export default App;
