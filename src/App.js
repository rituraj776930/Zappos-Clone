import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/HomePage/Home';
import Signup from './Pages/SignUp/Signup';
import Cart from './Pages/CartPAge/Cart';
import Products from './Pages/Products/Products';
import AllRoutes from './Pages/AllRoutes';
import Checkout from './Pages/Checkout/Checkout';
import Otp from './Pages/OtpPage/Otp';
import Thankyou from './Pages/ThankYou/Thankyou';



function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Otp/> */}
      {/* <Thankyou/> */}
    </div>
  );
}

export default App;
