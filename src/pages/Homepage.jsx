import "./Homepage.css";
import Carousel from "../components/Carousel";
import { imgs } from "../assets/imgs";

export default function HomePage() {
  return (
    <div>
      <h1 className="home-name">
        Welcome to <span className="fade shop-name">Shoppex</span>
      </h1>
      <Carousel imgs={imgs} />
    </div>
  );
}
