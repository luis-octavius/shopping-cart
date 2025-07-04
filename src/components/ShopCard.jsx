import './ShopCard.css'
import { useEffect, useState } from 'react';
import useStore from '../utils/store';

export default function ShopCard({props}) {
    const [quantity, setQuantity] = useState(0);
    const { increment, decrement } = useStore();

    useEffect(() => {

    }, [quantity])

    const handleQuantity = (sign) => {
        if (quantity == 1 && sign == '-') {
            return;
        } else {
            setQuantity(quantity - 1);
        }

        if (sign == '+') {
            setQuantity(quantity + 1)
        }

        
    }

    return (
        <div className="shop-card">
            <img src={props.image} />
            <div className="text-card">
                <h3>{props.title}</h3>
                <div className="quantity-div">
                    <button 
                        className="quantity-btn"
                        onClick={() => { 
                            handleQuantity('-')
                            decrement();
                        }}    
                    >-</button>
                    <div 
                    className="number-div"

                    >
                        {quantity}</div>
                    <button 
                        className="quantity-btn"
                        onClick={() => { 
                            handleQuantity('+')
                            increment();
                        }}    
                    >+</button>
                </div>
            </div>
        </div>
    )
}