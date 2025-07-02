import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import './Shop.css'
import Loading from '../components/ui/Loading';

export default function Shop() {
    // const [data, setData] = useState(null);
    const data = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
    
    // const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
            console.log(data);
            setIsLoading(false);
    },[isLoading]);

    if (isLoading) return (
        <div className="container-load">
            <Loading />
        </div>
    )

    return (
        <>
            <div className="catalog">
                <h1>Catalog</h1>
            </div>
        <div className="container">
            {data && data.map((item, index) => (
                <Card 
                    product={item}
                    key={index}    
                />
            ))}
        </div>
        </>
    )
}

Shop.propTypes = {
    url: PropTypes.string.isRequired,
}