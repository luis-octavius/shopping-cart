import './Cart.css';
import ShopCard from '../components/ShopCard';
import useStore from '../utils/store';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../utils/UserContext';

export default function Cart () {
    const data = useContext(UserContext);
    const [value, setValue] = useState(0);
    const { products } = useStore();

    useEffect(() => {
        const values = products
        .map((index) => {
            const singleValue = handleProductPrice(index);
            return singleValue;
        })
        .reduce((acc, curr) => acc + curr, 0);
        setValue(values);
    }, [products]);

    const handleProductId = (id) => {
        return data[id - 1];
    };

    const handleProductPrice = (id) => {
        return data[id - 1].price;
    }

    return (
        <div className="shop">
            <div className="shop-items">
                {products.length < 1 ? (
                    <div className="empty">Carrinho Vazio</div>
                ) : (products.map((index) => (
                    <ShopCard 
                        props={handleProductId(index)} 
                        key={index}
                    />
                )))
            }
                
            </div>
            <div className="bar"></div>
            <div className="shop-buy">
                <div className="value">
                    <h2>Total Value<span className="highlight">R$ {value}</span></h2>
                </div>
                <button className="buy-btn">Buy</button>
            </div>
        </div>
    )
}