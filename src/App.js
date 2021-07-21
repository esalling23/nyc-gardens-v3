
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home.js'

function App() {
  return (
    <main>
      <Router>
        <Switch>
            <Route exact path='/' component={ Home } />
          </Switch>
    < /Router>
    </main>
  );
}

export default App;
