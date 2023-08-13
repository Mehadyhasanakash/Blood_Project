import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import im01 from "../assets/poster/poster_01.jpg";
import im02 from "../assets/poster/poster_02.jpg";
import im03 from "../assets/poster/poster_03.jpg";
import im04 from "../assets/poster/poster_04.jpg";
import im05 from "../assets/poster/poster_05.jpg";


const BloodCetagory = () => {
  return (
    
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={im01} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={im02} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={im03} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={im04} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={im05} alt="" /> </SwiperSlide>
       
      </Swiper>
      
    
  )
}

export default BloodCetagory
