import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Home } from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
