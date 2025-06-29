/*
Descrição
Imagem
Preço
Avaliação
Título
*/
import './Card.css';

export default function Card({product}) {
    return (
        <div className="card">
            <h3>{product.title}</h3> 
            <img src={product.img} />
            <div className="price-value">
                <h4>{product.price}</h4>
                <h4>{product.rating}</h4>
            </div>
            <div>
                <p>{product.description}</p>
            </div>
        </div>
    )
}