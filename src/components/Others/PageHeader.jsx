import Image from 'next/image'
import React from 'react'

const PageHeader = (props) => {
  const { title, subTitle, description } = props

  return (
    <div className='text-center mx-auto w-full h-96 relative'>
      <Image src='/images/header.png' layout='fill' objectFit='cover' objectPosition='center' alt='Hero Background' />
      <div className='absolute top-0 left-0 w-full h-full  bg-black opacity-60'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pt-12 min-w-[300px] lg:pt-0'>
        <h4 className='text-sm'>{subTitle}</h4>
        <h1 className='text-4xl font-bold py-3'>{title}</h1>
        <p className='text-lg text-gray-100 py-3 mx-auto'>{description}</p>
      </div>
    </div>
  )
}

export default PageHeader