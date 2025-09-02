import React from "react";
import { motion } from "framer-motion";
import donatebg from "../assets/Contact/Donate-bg.png";
import volunteerbg from "../assets/Contact/Volunteer-bg.png";

export default function Involve() {
  return (
    <div className="w-full">
      {/* Donate Section */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-16 py-16 bg-fixed"
        style={{ backgroundImage: `url(${donatebg})` }}
      >
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
              alt="Donate"
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[550px] object-cover"
            />
          </motion.div>

          {/* Content + Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFBCE5] mb-6 text-center md:text-left">
              Make a Difference – Donate Now
            </h2>
            <p className="text-lg text-pink-100 mb-8 leading-relaxed text-center md:text-left">
              Your generosity fuels change. Every contribution helps us support
              impactful initiatives and transform lives. Together, we can bring
              hope where it’s needed most.
            </p>

            {/* Donate Form */}
            <form className="bg-[#FFBCE5]/10 backdrop-blur-md border border-[#A53C7D]/30 shadow-xl rounded-2xl p-8 max-w-md mx-auto md:mx-0">
              <label className="block text-left mb-4">
                <span className="text-[#FFBCE5] font-semibold">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-lg bg-white/10 text-white placeholder-[#FFBCE5] p-3 focus:ring-2 focus:ring-[#A53C7D] focus:outline-none"
                />
              </label>

              <label className="block text-left mb-4">
                <span className="text-[#FFBCE5] font-semibold">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-lg bg-white/10 text-white placeholder-[#FFBCE5] p-3 focus:ring-2 focus:ring-[#A53C7D] focus:outline-none"
                />
              </label>

              <label className="block text-left mb-6">
                <span className="text-[#FFBCE5] font-semibold">Amount</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="mt-1 block w-full rounded-lg bg-white/10 text-white placeholder-[#FFBCE5] p-3 focus:ring-2 focus:ring-[#A53C7D] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-[#A53C7D] hover:bg-[#FF78CB] text-white font-semibold py-3 rounded-xl shadow-lg transition"
              >
                Donate Now
              </button>
            </form>
          </motion.div>
        </section>
      </div>

      {/* Volunteer Section */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-16 py-16 bg-fixed"
        style={{ backgroundImage: `url(${volunteerbg})` }}
      >
        <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 w-full">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
              alt="Volunteer"
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[550px] object-cover"
            />
          </motion.div>

          {/* Content + Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFBCE5] mb-6 text-center md:text-left">
              Join Hands – Volunteer With Us
            </h2>
            <p className="text-lg text-pink-100 italic mb-4 text-center md:text-left">
              “The best way to find yourself is to lose yourself in the service
              of others.” – Mahatma Gandhi
            </p>
            <p className="text-lg text-pink-100 mb-8 leading-relaxed text-center md:text-left">
              Our volunteers are the heartbeat of our mission. By giving your
              time and energy, you inspire hope and create real change in the
              community.
            </p>

            {/* Volunteer Form */}
            <form className="bg-[#FFBCE5]/10 backdrop-blur-md border border-[#A53C7D]/30 shadow-xl rounded-2xl p-8 max-w-md mx-auto md:mx-0">
              <label className="block text-left mb-4">
                <span className="text-[#FFBCE5] font-semibold">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-lg bg-white/10 text-white placeholder-[#FFBCE5] p-3 focus:ring-2 focus:ring-[#A53C7D] focus:outline-none"
                />
              </label>

              <label className="block text-left mb-4">
                <span className="text-[#FFBCE5] font-semibold">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-lg bg-white/10 text-white placeholder-[#FFBCE5] p-3 focus:ring-2 focus:ring-[#A53C7D] focus:outline-none"
                />
              </label>

              <label className="block text-left mb-6">
                <span className="text-[#FFBCE5] font-semibold">
                  Why do you want to volunteer?
                </span>
                <textarea
                  placeholder="Share your motivation..."
                  rows="4"
                  className="mt-1 block w-full rounded-lg bg-white/10 text-white placeholder-[#FFBCE5] p-3 focus:ring-2 focus:ring-[#A53C7D] focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-[#A53C7D] hover:bg-[#FF78CB] text-white font-semibold py-3 rounded-xl shadow-lg transition"
              >
                Join the Movement
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
