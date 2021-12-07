
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GlobalStyle from './globalStyles';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cake from './components/ProductDetails/Cake';
import Dessert from './components/ProductDetails/Dessert';
import Gallery from './pages/Gallery';
import Successful from './pages/Successful';

import PrivateRoute from './components/Routes/PrivateRoute'

import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import ForgotPasswordScreen from './components/Screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/Screens/ResetPasswordScreen';
import ProfileScreen from './components/Screens/ProfileScreen';
import Cart from './pages/Cart';
import CustomCake from './components/Customize/CustomCake';
import CheckoutScreen from './components/Screens/CheckoutScreen';
import ErrorScreen from './components/Screens/ErrorScreen';

function App() {

  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <GlobalStyle />
      
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/home' exact component = {Home} />
        <Route path = '/about' exact component = {About} />
        <Route path = '/shop' exact component = {Shop} />
        <Route path = '/product/cake/:id' component = {Cake} />
        <Route path = '/product/pastry/:id' component = {Dessert} />
        <Route path = '/customize' exact component = {CustomCake} />
        <Route path = '/login' exact component = {LoginScreen} />    
        <Route path = '/register' exact component = {RegisterScreen} />    
        <Route path = '/forgotpassword' exact component = {ForgotPasswordScreen} />    
        <Route path = '/resetpassword/:resetToken' exact component = {ResetPasswordScreen} />  
        <Route path = '/me' exact component = {ProfileScreen} />  
        <Route path = '/gallery' exact component = {Gallery} />        
        <Route path = '/contactUs' exact component = {ContactUs} />
        <Route path = '/cart' exact component = {Cart} />
        <Route path = '/checkout' exact component = {CheckoutScreen} />
        <Route path = '/success' exact component = {Successful} />
        <Route path = '/error' exact component = {ErrorScreen} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
