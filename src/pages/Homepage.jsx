import './Homepage.css'
import Carousel from '../components/ui/Carousel';
import { imgs } from '../assets/imgs';

export default function HomePage () {
    return (
        <div>
            <Carousel imgs={imgs}/>        
        </div>
    )
}