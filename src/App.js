import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Cars from './components/Home/Cars/Cars';
import Home from './components/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <Route  path='/cars'>
          <Cars></Cars>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
