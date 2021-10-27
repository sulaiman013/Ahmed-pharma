import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import SignUp from './components/SignUp/SignUp';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Details from './components/Details/Details';
import PrivateRoute from './components/privateRoute/Privateroute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
    <Router>
    <Header />
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route exact path = '/home'>
          <Home></Home>
        </Route>
        <Route path = '/about'>
          <About></About>
        </Route>
        <Route path = '/contact'>
          <Contact></Contact>
        </Route>
        <Route path = '/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path = '/products'>
          <Products></Products>
        </PrivateRoute>
        <Route path = '/signup'>
          <SignUp></SignUp>
        </Route>
        <PrivateRoute path = '/home/:id'>
          <Details></Details>
        </PrivateRoute>

        <Route path = '*'>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
