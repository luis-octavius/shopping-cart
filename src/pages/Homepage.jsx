import './Homepage.css'
import Carousel from '../components/ui/Carousel';
import { imgs } from '../assets/imgs';
import Navbar from '../components/ui/Navbar';

export default function HomePage () {
    return (
        <>
            <Navbar />
            <Carousel imgs={imgs}/>        
        </>
    )
}