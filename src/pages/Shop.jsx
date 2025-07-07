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
    const { count } = useStore();

    useEffect(() => {
            setIsLoading(false);
    },[isLoading, count]);

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
    count: PropTypes.number.isRequired,
}