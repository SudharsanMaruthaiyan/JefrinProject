import React from "react";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../assets/Api/servicesData";

const Services = () => {
  return (
    <div className="bg-gray-100 pt-32 pb-20 px-6 sm:px-[8%] mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-16 font-[poppins]">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            details={service.details}
            id={service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
