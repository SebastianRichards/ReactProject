import Intro from './components/Intro';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Layout from './components/Layout';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { type } from '@testing-library/user-event/dist/type';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocalConvenienceStoreOutlined, SettingsInputAntennaTwoTone } from '@material-ui/icons';



function App() {


  /*let users = {
    "sebastian": "password",
    "henry": "hoover",
    "guest": "guest",
  }*/

  const [users, setUsers] = useState({
    "sebastian": "password",
    "henry": "hoover",
    "guest": "guest",
  })

  const [user, setUser] = useState({username: "", password: ""});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [test, setTest] =useState("");
  
  

  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  
  const Login = details => {
    console.log(details);
    for (const key in users) {
      const value = users[key]

      if(details.username == key) {
        
        if (details.password == value) {
          setIsAuth(true);
          setError("");
          setUser({username: key, password: value});
          localStorage.setItem("userUsername", details.username);
          localStorage.setItem("userPassword", details.password);
          navigate('/home');
        } else {
          setError("Details do not match");
        }      
      }     
    }
    if(users[details.username] == null) {
      setError("Username doesn't exist");
      console.log(users[details.username]);
      console.log(users);
    }
  }

  const signUp = details => {
    let u = details.username;
    let p = details.password;
    let cp = details.confirmPassword;
    if (users[details.username] !== undefined) {
      setError("Username taken");
      console.log(details.username + "wow")
    } else {
      if (p == cp) {
        let obj = {};
        obj[u] = p;
        console.log(obj + "obj");
        setUsers({...users, [u] : p});
        console.log(users[1] + "ew");
        setSuccessMessage("Account created");
        setError("");
        navigate('/');
        
      } else {
          setError("Passwords do not match");
        }
      }
    


  }

  const errorNull = () => {
    setError("");
  }

  const successNull = () => {
    setSuccessMessage("");
  }

  const guestLogin = () => {
    setIsAuth(true);
    setUser({
      username: "guest",
      password: "guest",
    })
    localStorage.setItem("userUsername", "guest");
    localStorage.setItem("userPassword", "guest");
    authenticated = true;
    navigate('/home')
  }
 
  const Logout = () => {
    setIsAuth(false);
    setUser({
      username: "",
      password: "", 
    })
    localStorage.setItem("userUsername", "");
    localStorage.setItem("userPassword", "");
    authenticated = false;
    
    navigate('/Login');
  }
  

  let authenticated = false
  let userTaken = false

  useEffect(() => {
    const u = localStorage.getItem("userUsername");
    const p = localStorage.getItem("userPassword");
    console.log(u + "is u");
    console.log(users);
    if(u !== null || u !== "") {
      setIsAuth(true);
      setUsers({...users, [u] : p});
      setUser({ 
        username: u,
        password: p});
      authenticated = true;
    } 
    console.log(users);
    if(authenticated == false) {
      setIsAuth(false);
    }
  

  }, []

  )

  
  return (

    <div className="App">
  
      
      {(error !== "") ? (<div className='error'>{error}</div>) : ""}
      {(successMessage !== "") ? (<div className='successMessage'>{successMessage}</div>) : ""}
      <Routes>  

        <Route path="" element={isAuth ? <Navigate to ="/Home" /> :
          <Navigate to ="/Login"/>}/>  
        
          
        <Route path="/*" element={<Layout Logout={Logout} user={user} />} />
        
          
        <Route path="/Login" element={<Intro Login={Login} guestLogin={guestLogin} signUp={signUp} successNull = {successNull} errorNull={errorNull}/>}/>}
          
        
        
        
          
      </Routes>        
    </div>
     
 
    
  );
}

export default App;
