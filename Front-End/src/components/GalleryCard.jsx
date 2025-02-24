import React from 'react'

const GalleryCard = ({img}) => {
  return (
    <div className=' bg-gray-100 shadow-2xl p-2 shadow-blue-700 hover:-translate-y-2 transition-all'>
      <img className=' rounded-lg ' src={img} alt="" />
    </div>
  )
}

export default GalleryCard