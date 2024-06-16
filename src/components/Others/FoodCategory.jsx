"use client"
import Image from 'next/image'
import React, { useState } from 'react'


const categories = [
  {
    id: 1,
    name: 'CHEESE CROISSANTS',
    image: 'https://images.unsplash.com/photo-1592011432621-f7f576f44484?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 2,
    name: 'BRUSCHETTI',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 3,
    name: 'AWESOME VEGETABLES',
    image: 'https://images.unsplash.com/photo-1585703900468-13c7a978ad86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 4,
    name: 'ALL-TIME BEST RECIPES',
    image: 'https://images.unsplash.com/photo-1566918214014-a3b3e0132267?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  },
  {
    id: 5,
    name: 'MEAL FOR WHOLE FAMILY',
    image: 'https://images.unsplash.com/photo-1562967915-92ae0c320a01?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto omnis architecto ipsa velit culpa maxime placeat est animi, esse tenetur unde! Cumque, inventore veniam nisi vero amet mollitia et.'
  }
]

const FoodCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className='container primary-gap'>
      <div className='grid grid-cols-12 justify-items-center'>
        <div className='col-span-3'>
          {categories.map((category) => (
            <div key={category.id} className='flex items-center space-x-4 pb-6'>
              <p
                className={`text-md text-gray-700 cursor-pointer border-b hover:border-black transition-all mb-0 ${selectedCategory.id === category.id ? 'border-black' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-1 border-r border-gray-300 border-2"></div>
        <div className='col-span-7'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 lg:col-span-8'>
              <h3 className='text-3xl font-semibold'>{selectedCategory.name}</h3>
              <p className='text-gray-600 mt-4'>{selectedCategory.description}</p>
            </div>
            <div className='col-span-12 lg:col-span-4 w-32 h-32 md:w-72 md:h-72 relative'>
              <Image objectFit='cover' objectPosition='center' layout='fill' src={selectedCategory.image} alt={selectedCategory.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodCategory