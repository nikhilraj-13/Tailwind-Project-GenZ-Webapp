import React from 'react'
import { services } from '../assets/assets'

export default function Services() {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4 border-2 border-yellow-400 rounded-lg p-5 bg-white shadow-sm hover:scale-105 duration 300 transition">
              <div className="text-2xl text-black mt-1"><service.icon className='w-10 h-10'/></div>
              <div>
                <h3 className="font-semibold text-black/50 text-sm md:text-base">
                  {service.title}
                </h3>
                <p>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
