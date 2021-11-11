import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Explore from './components/Cars/Explore/Explore';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <Route  path='/explore'>
          <Explore></Explore>
        </Route>
        <Route  path='/login'>
         <Login></Login>
        </Route>
        <Route  path='/register'>
         <Register></Register>
        </Route>
        <PrivateRoute  path='/placeorder/:id'>
         <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <PrivateRoute  path='/dashboard'>
         <DashBoard></DashBoard>
        </PrivateRoute>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;


// services
// cars
// placeorder
// my Oreder