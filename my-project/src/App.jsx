import Navbar from "./assets/Navbar";
import Homepage from "./assets/Homepage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./assets/Product_carousel";


export default function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <SimpleSlider/>
    </>
  )
}