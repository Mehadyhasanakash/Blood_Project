import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'






const Review = () => {

    const [review, setReview] = useState([]);
    console.log(review.length)

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data.reviews))
    }, [])







    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(item => <SwiperSlide key={item.id}>

                        <div className='flex flex-col items-center mt-20'>
                            <Rating 
                                style={{ maxWidth: 180 }}
                                value={item.rew}
                                readOnly
                            />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </SwiperSlide>



                    )
                }
            </Swiper>


        </>
    )
}

export default Review
