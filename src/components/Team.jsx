import React from 'react'
import { teams } from '../assets/assets'

export default function Team() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teams.map((member,index) => (
          <div key={index} className="bg-white border border-yellow-400 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
            <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-3xl object-cover mb-4" />

            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>

            <p className="text-sm text-gray-500">
              {member.designation}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}