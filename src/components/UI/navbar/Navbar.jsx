import { React, useContext} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context/index';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('auth');
    }
    return (
    <>
    <div className='navbar'>
      <MyButton style={{border:"1px solid red", color: "#9F3720"}} onClick={logout}>
        Exit
      </MyButton>
      <div className='navbar__links'>
        <NavLink to="/">About web-site</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
    <Outlet></Outlet>
    </>
    );
};

export default Navbar;