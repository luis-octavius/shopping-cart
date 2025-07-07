import "./Card.css";
import shopAdd from "../assets/shopping-cart-add.svg";
import useStore from "../utils/store";

export default function Card({ product }) {
  const { increment, addProduct } = useStore();

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <div className="container-image">
        <img className="card-image" src={product.image} />
      </div>
      <div className="price-value">
        <h4>
          <span className="highlight">Price</span>R$ {product.price}
        </h4>
        <h4>
          <span className="highlight">Rating</span>
          {product.rating.rate}
        </h4>
        <img
          className="add-button"
          src={shopAdd}
          alt="cart with plus sign"
          aria-label="Add to Cart"
          data-testid="add-button"
          onClick={() => {
            increment();
            addProduct(product.id);
          }}
        />
      </div>
      <div className="card-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
}
