import './Cart.css';
import ShopCard from '../components/ShopCard'

export default function Cart ({ countItems }) {
    const mockProperties = {
        title: "Teste - Roupa tal ETC",
        img: "https://picsum.photos/200",
    }

    const mockProperties2 = {
        title: "Reflas The Bugas",
        img: "https://picsum.photos/200"
    }

    return (
        <div className="shop">
            <div className="shop-items">
                <ShopCard props={mockProperties} />
                <ShopCard props={mockProperties2} />
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