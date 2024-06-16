import React from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'
import { Button } from '../ui/button'
import { foodCategories, menus } from '@/lib/data'
import Link from 'next/link'


const OurMenu = () => {

  // Select the first three categories to display on the homepage
  const categoriesToShow = Object.keys(foodCategories[0]).slice(0, 3);

  return (
    <section className='mb-32'>
      <TitleSection
        title='Our Menu'
        subTitle='TASTY AND CRUNCHY'
        description='Explore our carefully curated menus featuring a wide range of Chinese dishes, from classic favorites to innovative creations. Each dish is crafted with the freshest ingredients and a dedication to flavor, ensuring a memorable dining experience every time.'
      />
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
          {categoriesToShow.map((category, catIndex) => (
            <div key={catIndex} className="my-8 flex flex-col">
              <h2 className="text-2xl font-bold mb-4 capitalize">{category.replace('_', ' ')}</h2>
              {foodCategories[0][category].map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div className='flex-grow p-4'>
                    <div className='flex justify-between items-center pb-3'>
                      <h3 className='text-lg font-semibold'>{item.name}</h3>
                      <div className="flex-grow mx-2 relative">
                        <div className="absolute inset-y-0 left-0 w-full border-b border-gray-400"></div>
                      </div>
                      <p className='text-lg font-semibold'>
                        {typeof item.price === 'object' ? `${item.price.small}/${item.price.large}` : item.price} TK
                      </p>
                    </div>
                    {item.description && <p className='text-gray-500'>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='text-center my-6'>
        <Link href='/menus'>
          <Button>Show More</Button>
        </Link>
      </div>
    </section>
  )
}

export default OurMenu