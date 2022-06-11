import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/HomePage/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
