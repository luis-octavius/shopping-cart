import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/ui/Card';

export default function Shop() {
    const [data, setData] = useState(null);
    const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((response) => {
            setData(response);
            console.log(response);
        })
        .catch((error) => console.error(error))
    },[url]);

    return (
        <div className="container">
            {data && data.map((product) => (
                <Card props={product}/>
            ))}
        </div>
    )
}

Shop.propTypes = {
    url: PropTypes.string,
}