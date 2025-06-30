import './Navbar.css'
import shopImg from '../assets/shopping.svg';
import shopBagImg from '../assets/shopping-bag.svg';
import { Link } from 'react-router';

export default function Navbar() {
    return (
        <div className="navbar shadow">
            <div className="logo">
                <Link to="/home" className="link">
                    <img src={shopBagImg} />
                    <h1>Shopping</h1>
                </Link>
            </div>

            <div className="shop-link">
                <Link to="/shop">
                Shop
                </Link>
            </div>

            <div className="shop-icon">
                <Link to="/cart">
                    <img src={shopImg} />
                </Link>
            </div>
        </div>
    )
}