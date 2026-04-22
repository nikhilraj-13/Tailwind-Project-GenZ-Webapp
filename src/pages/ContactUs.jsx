import React from 'react'
import Contact from '../components/Contact.jsx'
import ContactDetails from '../components/ContactDetails.jsx'
import { Helmet } from "react-helmet";

export default function ContactUs() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden my-20 py-16 px-4">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-wide uppercase">
            <span className="text-slate-900">GET IN </span>
            <span className="text-blue-600">TOUCH</span>
          </h1>
          <p className="mt-3 text-slate-500 text-base italic">
            {/* Have a project in mind or want to say hi? */}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <ContactDetails />
          <Contact />
        </div>
      </div>
    </div>
  )
}