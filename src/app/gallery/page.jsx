"use client"

import TitleSection from '@/components/Others/TitleSection'
import Image from 'next/image'
import React, { useState } from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { galleryImages } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from '@/components/Others/PageHeader';





const GalleryPage = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter galleryImages based on selectedCategory
  const filteredImages = galleryImages.filter(image =>
    selectedCategory === 'All' || image.category === selectedCategory
  );

  return (
    <section className=''>
      <PageHeader title='Gallery' subTitle='TASTY AND CRUNCHY' description='Take a virtual tour through our gallery and immerse yourself in the enchanting ambiance of china 101.' />
      <div className='container'>
        <div className='text-center mt-5 pt-32 '>
          <Tabs defaultValue="All" className="" onValueChange={setSelectedCategory}>
            <TabsList>
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Interiors">Interiors</TabsTrigger>
              <TabsTrigger value="Dishes">Dishes</TabsTrigger>
              <TabsTrigger value="Events">Events</TabsTrigger>
              {/* Add more tabs as needed */}
            </TabsList>
          </Tabs>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
          {
            filteredImages.map((image, index) => (
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                key={index}
              >
                <Image src={image.src} width={200} height={200} alt={image.alt} className='rounded-lg object-cover w-full h-full' />
              </LightGallery>
            ))
          }
        </div>
      </div>
    </section >
  )
}

export default GalleryPage