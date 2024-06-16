"use client"

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TitleSection = (props) => {

  useEffect(() => {
    AOS.init();
  }, []);

  const { title, subTitle, description } = props
  return (
    <div data-aos="fade-right" className='text-left lg:text-center mx-auto px-7'>
      <h4 className='text-sm'>{subTitle}</h4>
      <h1 className='text-4xl font-bold py-3 '>{title}</h1>
      <p className='text-lg text-gray-500 py-3 max-w-[100ch] mx-auto'>{description}</p>
    </div>
  )
}

export default TitleSection