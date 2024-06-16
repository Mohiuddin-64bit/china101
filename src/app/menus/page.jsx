import PageHeader from '@/components/Others/PageHeader';
import TitleSection from '@/components/Others/TitleSection'
import { foodCategories } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

const CategorySection = ({ category, items }) => (
  <div className="my-8 flex flex-col h-full"> {/* Ensure each category section has fixed height */}
    <h2 className="text-3xl text-primary font-bold mb-4 capitalize">{category.replace('_', ' ')}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      {items.map((item, itemIndex) => (
        <div key={itemIndex} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative h-[300px]">
            <Image src={`/images/menus/2.jpg`} alt={item.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              {item.description && <p className="text-gray-500">{item.description}</p>}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-lg font-semibold">
                {typeof item.price === 'object' ? `${item.price.small}/${item.price.large}` : item.price} TK
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
);

const MenusPage = () => {

  const categoriesToShow = Object.keys(foodCategories[0]);

  return (
    <>
      <PageHeader title='All Menu' subTitle='TASTY AND CRUNCHY' description='Indulge in a diverse menu that reflects our passion for quality and variety. From aromatic coffee and delightful snacks to hearty soups.' />

      <section className='pt-32 container'>
        <div className=' mt-12'>
          {categoriesToShow.map((category, catIndex) => (
            <CategorySection key={catIndex} category={category} items={foodCategories[0][category]} />
          ))}
        </div>
      </section>
    </>
  )
}

export default MenusPage