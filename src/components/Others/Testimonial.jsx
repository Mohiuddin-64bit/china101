"use client"
import Image from 'next/image'
import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const slides = [{
  name: 'Mohiuddin',
  testimonial: "I had an amazing dining experience at China 101! The food was absolutely delicious and authentically Chinese. The staff was incredibly friendly and attentive, making sure we had everything we needed. Highly recommend!",
  rating: 4.5,
}, {
  name: 'Meghla Akter Mim',
  testimonial: "I had an amazing dining experience at China 101! The food was absolutely delicious and authentically Chinese. The staff was incredibly friendly and attentive, making sure we had everything we needed. Highly recommend!",
  rating: 4.5,
}, {
  name: 'Rahat Hossain',
  testimonial: "Best Chinese food in town! The flavors are spot on, and the presentation is beautiful. The staff is welcoming and provides excellent service. China 101 is now my go-to restaurant for a perfect meal.",
  rating: 4.5,
}];


const Testimonial = () => {
  return (
    <section className='testimonial-section relative'>
      <ParallaxBanner
        layers={[{ image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', speed: -50 }]}
        className="aspect-[1/2] sm:aspect-[3/2] md:aspect-[4/2] lg:aspect-[3/1] xl:aspect-[4/1]"
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' />
      <div className='absolute inset-0 z-10 flex items-center justify-center p-5'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='w-full max-w-6xl'
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className=' rounded-lg pb-12 shadow-lg max-w-md mx-auto'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 relative rounded-full overflow-hidden'>
                    <Image src='/images/story/1.jpg' alt='testimonial' layout='fill' objectFit='cover' />
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg font-bold text-white'>{slide.name}</h4>
                  </div>
                </div>
                <p className='text-gray-100 mb-4'>
                  {slide.testimonial}
                </p>
                <div className='flex items-center'>
                  <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
                    <Image src='/images/story/1.jpg' alt='testimonial' width={16} height={16} />
                  </div>
                  <div className='ml-2'>
                    <p className='text-gray-100'>
                      {slide.rating}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial