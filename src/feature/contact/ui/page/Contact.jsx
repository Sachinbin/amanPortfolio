import React from 'react'
import Navbar from '../../../dashboard/ui/components/Navbar'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  })


  let handleSub = (data) => {
    console.log(data);
    toast.success("Message sent successfully ")
    reset()

  }
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="px-10 lg:px-20 py-20">

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            Get in Touch
          </h1>
          <p className="text-white/60 mt-4 max-w-xl">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}
          <form onSubmit={handleSubmit(handleSub)}>
            <div className="space-y-6">

              <div>
                <input
                  {...register("name", { required: "Please fill the name" })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B6FF3B]"
                />
                {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
              </div>

              <div>
                <input
                {...register("email", { required: "Please fill the email" })}
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B6FF3B]"
              />
               {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
              </div>

             <div>
               <textarea
                {...register("message", { required: "Please fill the message" })}
                rows="5"
                placeholder="Your Message"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B6FF3B]"
              ></textarea>
               {errors.message && <p className='text-sm text-red-500'>{errors.message.message}</p>}

             </div>
              <button
                type='submit'
                className="bg-[#B6FF3B] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Send Message
              </button>

            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-white/70">

            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p>yourmail@example.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
              <p>+91 8928897935</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <p>Mumbai, India</p>
            </div>

            {/* Socials */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-3">Follow Me</h3>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B6FF3B] hover:text-black transition cursor-pointer">
                  IG
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B6FF3B] hover:text-black transition cursor-pointer">
                  TW
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B6FF3B] hover:text-black transition cursor-pointer">
                  LN
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact
