import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image01 from '../assets/image/banner_01.jpg';
import image02 from '../assets/image/banner_02.jpg';
import image03 from '../assets/image/banner_03.jpg';
import image04 from '../assets/image/banner_04.jpg';

const Banner = () => {
  return (
    <>
    <Carousel autoPlay={Boolean}  >
                <div>
                    <img src={image01} />
                </div>
                <div>
                    <img src={image02} />
                </div>
                <div>
                    <img src={image03} />
                </div>
                <div>
                    <img src={image04} />
                </div>
            </Carousel>
      
    </>
  )
}

export default Banner
