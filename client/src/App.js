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
import { useContext } from 'react';
import { Context } from './context/Context';


function App() {
  const {user} = useContext(Context)
  // console.log(user)

  return (
    <div className="App">
       <Router>
       <TopBar />
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>

          <Route path="/settings">
          {user ? <Settings/> : <Home />}
          </Route>

          <Route path="/login">
            {user? <Home/> : <Login />}
          </Route>

          <Route path="/register">
            {user ? <Home/> : <Register />}
          </Route>

          <Route path='/write'>
            {user ? <Write/> : <Home />}
          </Route>

          <Route path="/posts/:id">
            {user? <Single/> : <Home />}
          </Route>
          
        </Switch>
    </Router>
      </div>
  );
}

export default App;
