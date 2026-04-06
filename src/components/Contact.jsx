import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Contact() {
    //initial values for formik
    const initialValues = {
        name: "",
        email: "",
        message: "",
    };
    //Validation schema for formik: with help of Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(20, "Name must be at most 20 characters"),
        email: Yup.string().email("Invalid email format").required("Email is required").min(13, "Email must be at least 13 characters").max(30, "Email must be at most 30 characters"),
        message: Yup.string().required("Message is required").max(100, "Message must be at most 100 characters"),
    });

    //Formik hook management
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(`Name is: ${values.name}`);
            console.log(`Email is: ${values.email}`);
            console.log(`Message is: ${values.message}`);
            alert("Mail sent successfully!");
            resetForm();
        }
    });

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 w-full shadow-sm border border-slate-100 flex flex-col justify-between hover:bg-white-900 hover:scale-105 transition-all duration-300 ">
 
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 h-full">
 
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-slate-700 font-medium mb-1.5 text-sm">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                    )}
                </div>
 
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-slate-700 font-medium mb-1.5 text-sm">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    )}
                </div>
 
                {/* Message */}
                <div className="flex-1">
                    <label htmlFor="message" className="block text-slate-700 font-medium mb-1.5 text-sm">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        rows="5"
                        className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>
                    )}
                </div>
 
                {/* Submit */}
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2 11 13" />
                        <path d="M22 2 15 22 11 13 2 9l20-7z" />
                    </svg>
                    Send Message
                </button>
 
            </form>
        </div>
  )
}
