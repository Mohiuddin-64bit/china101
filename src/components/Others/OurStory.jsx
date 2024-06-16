"use client"
import React, { useEffect } from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const OurStory = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className='container primary-gap'>
      <TitleSection
        title='Our Story'
        subTitle='TASTY AND CRUNCHY'
        description='At China 101, we bring the rich and diverse flavors of Chinese cuisine to your table. Founded on a passion for authentic culinary traditions, our restaurant offers a dining experience that combines time-honored recipes with a modern touch. Come and discover the true essence of Chinese gastronomy.'
      />
      <div data-aos="fade-up"
        className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
        <div className='relative h-[400px] w-full'>
          <Image
            className='rounded-lg object-cover'
            src='https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Our Story'
            layout='fill'
            priority={true}
          />
        </div>
        <div className='relative h-[400px] w-full'>
          <Image
            className='rounded-lg object-cover'
            src='https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Our Story'
            layout='fill'
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default OurStory;