import './ShopCard.css'
import { useEffect, useState } from 'react';

export default function ShopCard({props}) {
    const [quantity, setQuantity] = useState(0);

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
            <img src={props.img} />
            <div className="text-card">
                <h3>{props.title}</h3>
                <div className="quantity-div">
                    <button 
                        className="quantity-btn"
                        onClick={() => handleQuantity('-')}    
    
                    >-</button>
                    <div 
                    className="number-div"

                    >
                        {quantity}</div>
                    <button 
                        className="quantity-btn"
                        onClick={() => handleQuantity('+')}    
                    >+</button>
                </div>
            </div>
        </div>
    )
}