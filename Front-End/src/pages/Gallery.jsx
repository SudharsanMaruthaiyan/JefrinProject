import React from 'react'
import { gallery } from '../assets/Api/gallery'
import GalleryCard from '../components/GalleryCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { gal10, gal6, gal7, gal8, gal9 } from '../assets/Api/image';

const Gallery = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className=' pt-28 px-6 sm:px-[8%] mx-auto'>
      <h2 className="text-3xl font-semibold text-center  font-[poppins]">Gallery</h2>
      <p className=' text-center font-[poppins] mb-10'>Pooja Celebration</p>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 pb-20'>
            {
                gallery.map((e,index)=>(
                    <div key={index}>
                        <GalleryCard img={e.img}/>
                    </div>
                ))
            }
        </div>
        <div className="slider-container py-8">
            <Slider {...settings} >
                <div className=' px-5'>
                    <img src={gal6} alt="" />
                </div>
                <div className=' px-5'>
                    <img src={gal7} alt="" />
                </div>
                <div className=' px-5'>
                    <img src={gal8} alt="" />
                </div>
                <div className=' px-5'>
                    <img src={gal9} alt="" />
                </div>
                <div className=' px-5'>
                    <img src={gal10} alt="" />
                </div>
            </Slider>
        </div>

    </div>
  )
}

export default Gallery