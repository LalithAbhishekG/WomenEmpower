import React from "react";
import { HeartHandshake, Globe2, Users } from "lucide-react";

function OurVision() {
  return (
    <section
      className="w-full py-16 bg-[#1b001b]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-6xl font-bold text-[#ffaaff]">Our Vision</h2>
        <p className="mt-3 text-pink-100 text-xl md:text-2xl">
          Empowering women worldwide to lead, inspire, and create lasting change
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Card 1 */}
          <div
            className="flex flex-col items-center text-center max-w-sm m-4 p-6 
                       bg-[#f5abff] bg-opacity-10 backdrop-blur-md 
                       rounded-xl shadow-md 
                       transition-all duration-300 ease-in-out 
                       hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#7a2c74] text-white">
              <HeartHandshake size={32} />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-black">Support & Equality</h3>
            <p className="mt-3 text-pink-950">
              Building a society where every woman has equal opportunities, rights, and support to thrive.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col items-center text-center max-w-sm m-4 p-6 
                       bg-[#f5abff] bg-opacity-10 backdrop-blur-md 
                       rounded-xl shadow-md 
                       transition-all duration-300 ease-in-out 
                       hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#7a2c74] text-white">
              <Users size={32} />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-black">Leadership & Growth</h3>
            <p className="mt-3 text-pink-950">
              Inspiring women to become leaders in their communities, careers, and personal lives.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col items-center text-center max-w-sm m-4 p-6 
                       bg-[#f5abff] bg-opacity-10 backdrop-blur-md 
                       rounded-xl shadow-md 
                       transition-all duration-300 ease-in-out 
                       hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#7a2c74] text-white">
              <Globe2 size={32} />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-black">Global Impact</h3>
            <p className="mt-3  text-pink-950">
              Creating a united global movement that uplifts women and drives positive change everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVision;
