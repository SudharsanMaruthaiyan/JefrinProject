import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../assets/Api/servicesData';

const ServiceDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const [detail, setDetail] = useState("")

  useEffect(()=>{
    servicesData.map((item)=>{
        if(item.id == id){
            setDetail(item)
        }
    })
},[])

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg pt-52">
      <h2 className="text-3xl font-semibold mb-4">{detail.title}</h2>
      <img src={detail.imgSrc} alt={detail.title} className="w-full h-64 object-cover mb-6" />
      <p className="text-lg text-gray-600 mb-4">{detail.details}</p>
    </div>
  );
};

export default ServiceDetails;
