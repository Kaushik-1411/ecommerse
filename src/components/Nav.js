import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav=()=>{                 //functional Component
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <img alt='logo'
            className='logo'
            src='https://t3.ftcdn.net/jpg/02/47/48/00/240_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg'></img>
           {auth ?  <ul className='nav-ul'>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update/:id">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className='nav-ul nav-right'>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;