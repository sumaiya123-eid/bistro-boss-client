import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

export default function Testimonials() {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setReviews(data)
        })
    },[])
  return (
    <div className='my-5'>
         <SectionTitle heading="---What Our Clients Say---" subHeading="Testimonials"></SectionTitle>
        <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
            {
                reviews.map(review=>(<SwiperSlide>
                   <div className='m-10 flex flex-col items-center text-center space-y-3'>
                   <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <div className='my-3'>
    <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/quote-left.png" alt="quote-left"/>
    </div>
                   <p>{review.details}</p>
                   <h3 className='uppercase text-2xl text-[#CD9003]'>{review.name}</h3>
                   </div>
                    </SwiperSlide>))
            }
      </Swiper>
    </div>
  )
}
