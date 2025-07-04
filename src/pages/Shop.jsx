import { 
    useState, 
    useEffect,
    useContext
} from 'react';
import { UserContext } from '../utils/UserContext';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import './Shop.css'
import Loading from '../components/ui/Loading';
import useStore from '../utils/store';

export default function Shop() {
    const data = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState(0);
    const [productId, setProductId] = useState(0);

    useEffect(() => {
            console.log(data);
            console.log("Item: ", items);
            setIsLoading(false);
    },[isLoading, items]);

    const handleNumItems = () => {
        setItems(items + 1);
    }

    const handleProductId = (id) => {
        setProductId(id);
    }

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
                    changeNumItem={handleNumItems}
                    onProjectId={handleProductId}
                />
            ))}
        </div>
        </>
    )
}

Shop.propTypes = {
    url: PropTypes.string.isRequired,
}