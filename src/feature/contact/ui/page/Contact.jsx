import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../../dashboard/ui/components/Navbar'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
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

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="px-10 lg:px-20 py-20"
      >
        <div className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            Get in Touch
          </h1>
          <p className="text-white/60 mt-4 max-w-xl">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.form
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(handleSub)}
          >
            <div className="space-y-6">
              <motion.div whileHover={{ y: -2, scale: 1.01 }} transition={{ duration: 0.25 }}>
                <input
                  {...register("name", { required: "Please fill the name" })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B6FF3B]"
                />
                {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
              </motion.div>

              <motion.div whileHover={{ y: -2, scale: 1.01 }} transition={{ duration: 0.25 }}>
                <input
                  {...register("email", { required: "Please fill the email" })}
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B6FF3B]"
                />
                {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
              </motion.div>

              <motion.div whileHover={{ y: -2, scale: 1.01 }} transition={{ duration: 0.25 }}>
                <textarea
                  {...register("message", { required: "Please fill the message" })}
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#B6FF3B]"
                ></textarea>
                {errors.message && <p className='text-sm text-red-500'>{errors.message.message}</p>}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                type='submit'
                className="bg-[#B6FF3B] text-black px-6 py-3 rounded-full font-semibold"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="space-y-6 text-white/70"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p>amangsaroj987@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
              <p>+91 8928897935</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <p>Mumbai, India</p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-3">Follow Me</h3>

              <div className="flex gap-4">
                <motion.div whileHover={{ y: -3, scale: 1.06 }} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B6FF3B] hover:text-black transition cursor-pointer">
                  IG
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.06 }} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B6FF3B] hover:text-black transition cursor-pointer">
                  TW
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.06 }} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B6FF3B] hover:text-black transition cursor-pointer">
                  LN
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  )
}

export default Contact
