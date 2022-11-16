import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import csslogo from "./images/CSS-Logo.png"
import creator from "./images/Css-creator.jpg"

function History() {
  return (
    <div className="mx-auto w-screen pt-36 px-24">
        <>
            <Swiper
                pagination={{
                type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-2"
                >
                <SwiperSlide>
                    <div className='grid grid-cols-2 mt-10 p-20'>
                        <div className='col-span-1 text-left bg-slate-300 p-8 rounded-tl-lg rounded-br-lg shadow-md'>
                            <p className='text-xl font-bold'>A brief history...</p>
                            <p className='text-md mt-12 font-normal'>
                            CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces.
                            </p>
                        </div>
                        <div className=''>
                            <img src={csslogo} alt="css-logo" width={400} className="mx-auto hover:animate-wave"></img>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='grid grid-cols-2 mt-10 p-20'>
                    <div className='col-span-1 text-left bg-slate-300 p-8 rounded-tl-lg rounded-br-lg shadow-md'>
                        <p className='text-md font-normal'>
                            CSS came into existence in 1994, so it can provide a standard way to design the pages on the world wide web. And Mr. Hakon Wium Lee developed a cascading style sheet for the same purpose. Because by this time, there was an immense demand for such a solution as HTML 4.01 was unable to give an appealing web page on its own. However, by seeing it, many people offered different styling sheets, but none of them succeeded as CSS. In its initial stage, it was primarily used for making websites accessible and appealing.
                        </p>
                    </div>
                    <div className='col-span-1'>
                        <div className='mx-auto'>
                            <img src={creator} alt="hakum lee" width={250} className="rounded-full mx-auto hover:animate-expand shadow-lg"></img>
                        </div>
                        <div className='mx-auto text-center mt-2'>
                            <p className='font-bold'>
                            Hakon Wium Lee
                            </p>
                            <p className='font-light italic'>
                                former CTO at Opera, Known for the creation of CSS.
                            </p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='grid grid-cols-2 mt-5 p-20'>
                    <div className='col-span-1 text-left bg-slate-300 p-8 rounded-tl-lg shadow-md mr-2'>
                        <p className='text-md font-normal'>
                        If we look at the history of CSS, we will find it has seen mainly three updates. CSS level 1 was launched in 1996, and it came again in 1999 with some improvements. However, CSS level 2 or CSS2 came in 1998 with media support. In this version, the user can utilize the other media elements. And finally, its latest version, CSS level 3, launched, and currently, we use this version only. The latest version of CSS allows us to take advantage of separation that helps in saving time.
                        </p>
                        <p className='text-md font-normal mt-2'>
                        It has a vast collection of font types, and you can use any font type from Google and Typecast. Also, this version is divided into many modules that make it easy to handle, and it also saves time formatting the web pages. Currently, most companies and organizations use CSS3 and HTML5 for their web development and designing tasks. 
                        </p>
                    </div>
                    <div className='col-span-1 text-left bg-slate-300 p-8 rounded-br-lg shadow-md ml-2'>
                        <p className='text-md font-bold mb-2'>Where would we be without CSS?</p>
                        <p className='text-md font-normal'>In short, we’d be using a very basic looking web. The web as we know it today couldn’t exist without CSS. An analogy commonly used is of building a house. While you could build a home only using beige bricks (HTML) it would have no features whatsoever. So, you could forget about colour on the walls, decoration, interesting architecture and visual effects. The web would be ‘vanilla’ and not the colourful, revolutionary and stimulating medium that we currently enjoy.  </p>
                    </div>
                </div>
                </SwiperSlide>

            </Swiper>
        </>
    </div>
  )
}

export default History