"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Button } from '../ui/button';
import TitleSection from './TitleSection';
import Link from 'next/link';
import { galleryImages } from '@/lib/data';

const menus = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661369889067-c86c31362f83?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://images.unsplash.com/photo-1571705042748-55feda1cfadc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661369889067-c86c31362f83?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://images.unsplash.com/photo-1571705042748-55feda1cfadc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

const GalleryComponent = () => {
  return (
    <section className='mt-5 px-5'>
      <div className='mb-10'>
        <TitleSection
          title='Our Gallery'
          subTitle='TASTY AND CRUNCHY'
          description='Step into our gallery to see the vibrant atmosphere of China 101. From our elegantly designed dining spaces to the beautifully presented dishes, get a glimpse of what awaits you at our restaurant.'
        />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {
          galleryImages.map((menu, index) => (
            <SwiperSlide key={index}>
              <div className='w-72 h-96 '>
                <Image src={menu.src} objectFit='cover' layout='fill' alt='menu' />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className='text-center mt-5'>
        <Link href='/gallery'>
          <Button>View More</Button>
        </Link>
      </div>
    </section>
  )

}

export default GalleryComponent