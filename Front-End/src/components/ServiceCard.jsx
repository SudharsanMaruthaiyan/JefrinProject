import React from 'react'

const ServiceCard = ({ title, description, details, imgSrc, id }) => {
  return (
    <div>
       <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl border hover:-translate-y-3 transition-all">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-center mb-2 font-[poppins]">{title}</h3>
          <p className="text-gray-600 text-sm text-center mb-4 font-[poppins]">{description}</p>
          <p className="text-gray-700 text-xs font-[poppins]">{details}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
