import './Navbar.css'
import shopImg from '../assets/shopping.svg';
import shopBagImg from '../assets/shopping-bag.svg';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import useStore from '../utils/store';

export default function Navbar() {
    const { count } = useStore();

    useEffect(() => {

    }, [count])

    return (
        <div className="navbar shadow">
            <div className="logo">
                <Link to="/home" className="link">
                    <img src={shopBagImg} />
                    <h1>Shoppex</h1>
                </Link>
            </div>

            <div className="shop-link">
                <Link to="/shop">
                Shop
                </Link>
            </div>

            <div className="shop-icon">
                <Link to="/cart" className="cart-shop">
                    <img src={shopImg} />
                    {count !== true && (
                        <div className="items">{count}</div>
                    )}
                </Link>
            </div>
        </div>
    )
}