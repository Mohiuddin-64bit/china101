"use client"

import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { useForm } from "react-hook-form"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"


const Reservation = () => {
  const form = useForm()

  const onSubmit = form.handleSubmit((data) => {
    console.log(data)
  }
  )

  return (
    <section className='testimonial-section relative mt-12'>
      <ParallaxBanner
        layers={[{ image: '/images/about/2.png', speed: -50 }]}
        className="aspect-[1/3] md:aspect-[4/4] lg:aspect-[3/2] xl:aspect-[5/2]"
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' />
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center p-5'>
        <div className='text-left lg:text-center mx-auto px-7 text-white'>
          <h4 className='text-sm'>TASTY AND CRUNCHY</h4>
          <h1 className='text-4xl font-bold py-3 '>RESERVATIONS</h1>
          <p className='text-lg text-gray-200 py-3 max-w-[100ch] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2  mt-5">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="rounded-none h-14 w-[300px] md:w-[500px]" placeholder="Name*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="rounded-none h-14 w-[300px] md:w-[500px]" placeholder="Phone*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <FormLabel className= "flex lg:hidden text-white py-3">Date</FormLabel>
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="date" className="rounded-none h-14 w-[300px] md:w-[500px]" placeholder="Date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormLabel className= "flex lg:hidden text-white py-3">Time</FormLabel>
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="time" className="rounded-none h-14 w-[300px] md:w-[500px]" placeholder="Time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="rounded-none h-14 w-full" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="rounded-none h-14 w-full" placeholder="Type your message here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default Reservation