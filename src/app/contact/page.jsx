import ContactForm from '@/components/Others/ContactForm'
import PageHeader from '@/components/Others/PageHeader'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <PageHeader title='Contact' subTitle='TASTY AND CRUNCHY' description='Take a virtual tour through our gallery and immerse yourself in the enchanting ambiance of China 101.' />
      <section className='pt-36 container'>
        <ContactForm />
      </section>
      <div className="w-full mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58421.39700827147!2d90.39564959144103!3d23.770999835767388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70de557dfd5%3A0x7b440a94f3aabab4!2sBanani%20Blues%20FC%20Field%2C%20Rd%20No%2013A%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1718517661957!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default ContactPage