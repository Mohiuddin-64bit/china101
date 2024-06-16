import PageHeader from '@/components/Others/PageHeader'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <PageHeader title='About Page' subTitle='Discover Our Story' description='Take a virtual tour through our gallery and immerse yourself in the enchanting ambiance of China 101.' />
      <section className='container mt-12'>
        <div>
          <div className='md:flex items-center gap-5'>
            <p><p><span className='font-bold block mb-4 text-2xl'>Welcome to China 101</span>where our passion for culinary excellence meets the serene beauty of nature. Nestled in the heart of a lush landscape, our restaurant offers a dining experience that not only tantalizes your taste buds but also reconnects you with the tranquility of the natural world. Our dishes are crafted using the freshest, locally-sourced ingredients, reflecting our commitment to sustainability and the environment.</p>
            </p>
            <Image className='rounded-lg mx-auto mt-7 md:mt-0' src='https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} alt='About Us' />
          </div>
          <div className='md:flex flex-row-reverse mt-12 items-center gap-5'>
            <p><span className='font-bold block mb-4 text-2xl'>The China 101 Experience</span>we pride ourselves on providing an authentic and immersive dining experience. Our menu is a carefully crafted selection of classic and contemporary Chinese dishes, each prepared with the finest ingredients and meticulous attention to detail. From the moment you step through our doors, you will be greeted by a warm and inviting atmosphere, designed to reflect the rich cultural heritage of China.</p>
            <Image className='rounded-lg mx-auto mt-7 md:mt-0' src='https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} alt='About Us' />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage