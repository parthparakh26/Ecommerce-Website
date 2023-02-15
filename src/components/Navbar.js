import React from 'react';
import '../CSS/navbar.css'
import searchButton from '../img/search-button.png'
import auth from '../img/auth.png'
import cart from '../img/cart.png'
import {Link} from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

function Header(){

    const {totalQuantities} = useStateContext();

    return(
        <div className="navbar">
           <Link to="/" style={{ textDecoration: 'none' }}><div><h4 className='logo'>WIRE CART</h4></div></Link>
           <div className='search--section'>
                <input className='search-bar' placeholder='Search for products'></input>
                <button className='search-button'><img src={searchButton} className='search-button-icon'></img></button>
            </div>
            <div className='header--buttons'>
                <div className='auth--button'>
                    <button className='auth'>
                    <img src={auth}></img>
                    <h6 className='auth-annotation'>Profile</h6>
                    </button>
                    <div className='login-register-option'>
                        <ul className='unordered-list'>
                            <Link to='/Login'><li className='list'>Login</li></Link>
                            <Link to='/Register'><li className='list'>Register</li></Link>
                        </ul>
                    </div>
                </div>    
                <div className='cart--button'>
                    <Link to="/My-Cart" style={{ textDecoration: 'none' }}> 
                    <button className='cart'>
                    <img src={cart}></img>
                    <h6 className='cart-annotation'>Cart</h6>
                    </button>
                    <div className='counter'>{totalQuantities}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;