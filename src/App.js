import './App.css';
import Header,{Footer} from './Header/header';
import Hero from './Hero/hero';
import Deal from './Deals/Deal';
import Service from './Services/Service';
import Login from './Login/Login';
import Signup from './SignUp/Signup';
import Enquiry from './Enquiry/Enquiry';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <div className='Header'>
            <Header/>
            <Hero/>
            <Deal title="Hot Deals !"/>
            <Service/>
            <Login/>
            <Signup/>
            <Enquiry/>
            <Footer/>
          </div>
      </div>
  );
}

export default App;
