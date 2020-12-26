import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EditForm from './components/notes/EditForm';
import Favorite from './components/notes/Favorites';
import Home from './pages/home';
import LandingPage from './pages/landingpage';
import NoteDetail from './components/notes/NoteDetail';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component={Home} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/note/:id" component={NoteDetail} />
        <Route path="/editform/:id" component={EditForm} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
