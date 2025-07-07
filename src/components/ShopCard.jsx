import "./ShopCard.css";
import { useEffect, useState } from "react";
import useStore from "../utils/store";

export default function ShopCard({ props }) {
  const [quantity, setQuantity] = useState(1);
  const { increment, decrement } = useStore();

  useEffect(() => {}, [quantity]);

  const handleQuantity = (sign) => {
    if (quantity == 1 && sign == "-") {
      return;
    } else {
      setQuantity(quantity - 1);
      decrement();
    }

    if (sign == "+") {
      setQuantity(quantity + 1);
      increment();
    }
  };

  return (
    <div className="shop-card shadow">
      <img src={props.image} />
      <div className="text-card">
        <h3>{props.title}</h3>
        <div className="quantity-div">
          <button
            className="quantity-btn"
            onClick={() => {
              handleQuantity("-");
            }}
          >
            -
          </button>
          <div className="number-div">{quantity}</div>
          <button
            className="quantity-btn"
            onClick={() => {
              handleQuantity("+");
            }}
          >
            +
          </button>
          <div className="price-tag">
            <p>
              <span className="highlight">Price</span> {props.price}
            </p>
          </div>
        </div>
      </div>
      <button class>Remove</button>
    </div>
  );
}
