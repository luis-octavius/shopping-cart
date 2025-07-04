import './Cart.css';
import ShopCard from '../components/ShopCard';
import useStore from '../utils/store';
import { useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContext';

export default function Cart () {
    const data = useContext(UserContext);
    const { products } = useStore();

    useEffect(() => {
        console.log("Data in Cart: ", data);
    }, [products]);

    const handleProductId = (id) => {
        console.log(data[id - 1]);
        return data[id - 1];
    };

    return (
        <div className="shop">
            <div className="shop-items">
                {products.map((index) => (
                    <ShopCard 
                        props={handleProductId(index)} 
                        key={index}
                    />
                ))}
            </div>
            <div className="bar"></div>
            <div className="shop-buy">
                <div className="value">
                    <h2>Value</h2>
                    <p>Aqui deverá ter uma função que somará tudo</p>
                </div>
            </div>
        </div>
    )
}