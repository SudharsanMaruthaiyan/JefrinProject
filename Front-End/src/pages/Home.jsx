import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg mx-auto pt-28 pb-20 sm:px-[8%] '>
        {/* Left side  */}
        <div className=' md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className=' text-3xl md:text-xl lg:text-5xl text-black font-semibold font-[poppins] leading-tight md:leading-tight lg:leading-relaxed '>Book Appointment <br />
            With Trusted Doctors</p>
            <div className=' flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className=' w-28' src={assets.group_profiles} alt="" />
                <p className='text-black font-[poppins]'>Simply browse through our extensive list of trusted doctors, <br className=' hidden sm:block'/>
                schedule your appointment hassle-free.</p>
            </div>
            <Link to={"/login"}>
                <p className=' flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 font-[poppins] text-lg'>
                Get In Touch <img className=' w-3' src={assets.arrow_icon} alt="" />
                </p>
            
            </Link>
        </div>
        
        {/* Right side  */}
        <div className='md:w-1/2 relative flex justify-end'>
            <img className='w-[500px] md:absolute bottom-0 h-auto rounded-lg' src="https://ik.imagekit.io/jjyo3gsee/pimg3/faq.png?updatedAt=1724257255673" alt=""/>
        </div>

        <div>
            <Testimonial/>
        </div>
    </div>
  )
}

export default Home