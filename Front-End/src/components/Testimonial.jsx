import React from 'react';
import { Star } from 'lucide-react'; // Import the Star icon from lucide-react
import { assets } from '../assets/assets';

const Testimonial = () => {
  return (
    <div className="max-w-[100%] mx-auto py-[20px] lg:py-[30px]">
      <div className=" sm:px-[8%] mx-auto grid grid-cols-1 my-11 gap-4 px-5 py-2">
        {/* Heading Section */}
        <div className="flex items-center">
          {/* <div className="px-5 py-[5px] rounded-3xl bg-[#1176F0] relative left-3"></div>
          <div className="px-4 py-2 border-[1px] border-[#1176F0] rounded-3xl">
            <p className="font-[poppins] font-bold text-base text-center">Testimonial</p>
          </div> */}
        </div>
        <div>
          <p className="font-[poppins] font-bold text-[24px] md:text-[34px]">
            WHAT OUR <span className="text-[#1176F0] underline">CUSTOMER SAYS</span>
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div className="slider-container">
          <div className="2xl:container">
            <div className="w-[100%] grid grid-cols-1 px-1 md:px-6 gap-3">
              {/* Testimonial Card */}
              <div>
                <div className="px-10 py-10 shadow-xl flex flex-col gap-5 rounded-3xl my-4">
                  {/* Customer Image */}
                  <div className="flex justify-center">
                    <img
                      src={assets.profile_pic}
                      alt="Customer" 
                      className=' rounded-full'
                    />
                  </div>

                  {/* Customer Testimonial */}
                  <div>
                    <p className="text-center font-[poppins]">
                      Lorem ipsum dolor sit amet consectetur. A sapien donec lacus nunc integer vitae vitae.
                      Gravida nulla in tincidunt lectus consectetur sed ante.
                    </p>
                  </div>

                  <hr />

                  {/* Rating */}
                  <div className="flex justify-center gap-3">
                    <Star size={16} color="#1176F0" fill="#1176F0" />
                    <Star size={16} color="#1176F0" fill="#1176F0" />
                    <Star size={16} color="#1176F0" fill="#1176F0" />
                    <Star size={16} color="#1176F0" fill="#1176F0" />
                    <Star size={16} color="#1176F0" fill="#1176F0" />
                  </div>

                  {/* Customer Name and Organization */}
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-bold font-[poppins] text-center">Jefrin</p>
                    <p className="font-[poppins] text-[14px] text-center">SRI SAIRAM ENGINEERING COLLEGE</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex gap-2 justify-center items-center">
                  <div className="h-[3px] w-[143px]" id="review2"></div>
                  <div className="h-[3px] w-[143px]" id="review"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
