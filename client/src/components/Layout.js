import React, {useState} from 'react'
import { MenuOutlined } from '@material-ui/icons'
import { Close } from '@material-ui/icons'
import { Link, Outlet } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import View from './View'
import { BrowserRouter as Router, Route, Routes, Navigate, useParams, useNavigate } from 'react-router-dom';



const Layout = ({Logout, user}) => {
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  const signout = () => {
    Logout();
  }

  const submitHandler = (e) => {
    e.preventDefault();
    signout();
}

  return (
    <div className='layoutBorder'>
      <div className='layout'>
        <div className='menu-icon'>
          <MenuOutlined className='menu' onClick={showMenu}/>
        </div>
        <nav className={active ? 'slider active' : 'slider'}>
          <ul>
            <div className='closed'>
              <Close className='close' onClick={showMenu}/>

            </div>
            <li className='homeText'>
              <Link to="/home">Home</Link>
            </li>
            <li className='homeText'>
              <Link to="/create">Create Microreactor</Link>
            </li>
            <li className='homeText'>
              <Link to={'/view'}>View Microreactors</Link>
            </li>
            <li className='homeText'>
              <Link to={'/'} onClick={submitHandler}>Sign Out</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
      <div>
        <Routes>
          <Route path="/home" element={<Home user={user}/>}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/view" element={<View />}/>

        </Routes>
      </div>
      <Outlet/>
    </div>
  )
}

export default Layout
