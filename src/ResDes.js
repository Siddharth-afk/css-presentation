import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import phone from './images/phone-flat-icon-3.png'
import tablet from './images/icon-tablet-9.png'
import laptop from './images/laptop-icon-png-21.png'
import computer from './images/computer-monitor-icon-23.png'
import bootstraplogo from './images/bootstrap-logo-png.png'
import tailwindlogo from './images/tailwind-css-logo.png'

function ResDes() {

  return (
    <div className='w-screen h-screen bg-gradient-to-b from-zinc-400 pt-12'>
        <h2 className='text-4xl mx-auto font-semibold text-slate-800 text-center'>Responsive Web Design</h2>
        <div className='grid grid-cols-6 gap-6 mt-20 mx-36'>
          <div className='col-start-1 col-end-4 px-8 bg-gradient-to-t from-zinc-400 rounded-md'>
            <p className='font-normal text-xl'>
              Nowadays the web is not only used on computers, but also through smartphones, tablets and various other devices. With all these different devices, there also comes the issue of how to display the webpage properly depending on the device you are using.
            </p>
            <p className='font-normal text-xl mb-4'>
              <span className='font-bold'>Responsive Web Design</span> is about using HTML and CSS to automatically resize a website to make sure it looks good on all devices.
            </p>
          </div>
          <div className='col-start-5 col-span-1'>
          <>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={false}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={phone} alt="phone" width="200px" className='mx-auto my-auto'></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={tablet} alt="tablet" width="200px" className='mx-auto my-auto'></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={computer} alt="computer" width="200px" className='mx-auto my-auto'></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={laptop} alt="laptop" width="200px" className='mx-auto pt-12'></img>
              </SwiperSlide>
            </Swiper>
          </>
          </div>
        </div>
        <div className='grid grid-cols-8 gap-2 mx-24 mt-20'>
              <div className='col-start-1 col-span-2'>
                <img src={bootstraplogo}  alt="logoboot" width='300px' className='mx-auto'></img>
              </div>
              <div className='col-start-3 col-span-2'>
                <img src={tailwindlogo} alt="taillogo" width="200px" className='mx-auto relative top-10'></img>
              </div>
              <div className='col-start-5 col-span-4 bg-gradient-to-t from-zinc-400 mx-auto px-12 pb-4 rounded-md'>
                <p className='font-normal text-xl'>
                  Though it is possible to make websites responsive using just HTML and CSS, various different platforms exist that help make the process a lot easier.
                </p>
                <p className='font-normal text-xl'>
                  Tailwind CSS and Bootstrap are greatly used in order to make websites more responsive in nature by having pre-made classes and layouts that scale to the size of the screen as need be. They also implement javascript in order for users to make custom classes and create a website as they imagine!
                </p>
              </div>
        </div>
        <div className='w-screen h-[75vh] bg-gradient-to-t from-zinc-400 pt-12'>
            <div className='w-[120vh] bg-gradient-to-b from-zinc-400 h-[50vh] mx-auto rounded-md py-6 px-6'>
              <p className='font-normal text-xl text-center mb-4'>CSS is one of the biggest hurdles to overcome when it comes to web developement and design. Most see CSS as a very basic tool that you don't need to put much thought into, however it can play a major role in showing how well a website is developed, how welcoming it is to different devices and most importantly, how appealing it is to the user.</p>
              <p className='font-normal text-xl text-center mb-4'>Good design takes a lot of time and a lot of practice. Making sure that your website is eligible on all platforms is a must in today's time as devices with many different screensizes exist.</p>
              <p className='font-normal text-xl text-center'>Tools such as Bootstrap, Tailwind, Reactjs, Nextjs etc. can make the process of web development much easier. allowing developers to focus on improving user experience and make better improvement to thier product.</p>
            </div>
        </div>
    </div>
  )
}

export default ResDes