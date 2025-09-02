import React from "react";
import storybg from '../assets/About/story-bg.png';
// Centralized images (easy to replace with local files later)
const images = {
  empowerment: "https://picsum.photos/seed/empowerment/600/400",
  community: "https://picsum.photos/seed/community/600/400",
  global: "https://picsum.photos/seed/global/600/400",
  leadership: "https://picsum.photos/seed/leadership/600/400",
};

export default function OurStory() {
  return (
    <section className="our-story w-full bg-[#4A002E] py-16" style={{backgroundImage: `url(${storybg})` }}>

      <h2 className="text-3xl md:text-5xl text-center font-bold text-[#FFBCE5] mb-12 md:mb-16">
        OUR STORY
      </h2>

      {/* Timeline Container */}
      <div
        className="relative bg-fixed bg-cover bg-center px-4 sm:px-6 md:px-12 py-10"
        style={{
          backgroundImage: "url('./img/Aboutuspics/Sect-2 BG.png')",
        }}
      >
        {/* Center Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#ffc6e9] transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div
          style={{ fontFamily: "Outfit, sans-serif" }}
          className="flex flex-col justify-between h-full space-y-16 md:space-y-24 max-w-6xl mx-auto"
        >
          {/* 2010 LEFT */}
          <div className="relative flex flex-col md:flex-row items-center w-full">
            {/* Text */}
            <div className="md:w-1/2 md:pr-10 text-center md:text-right mb-6 md:mb-0">
              <div className="bg-[#23002e] text-white p-6 rounded-2xl shadow-lg inline-block max-w-md mx-auto">
                <h3 className="text-2xl md:text-3xl text-[#FFBCE5] font-bold mb-2">
                  2010
                </h3>
                <p className="text-[#FFBCE5] text-base md:text-lg leading-relaxed">
                  Our movement began with a vision to empower women through
                  education and skill development, giving them the tools to
                  build brighter futures.
                </p>
              </div>
            </div>
            {/* Dot */}
            <div className="absolute md:static left-1/2 transform md:transform-none -translate-x-1/2 md:translate-x-0 bg-[#FF78CB] h-6 w-6 md:h-8 md:w-8 rounded-full z-10 border-4 border-white"></div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-start ">
              <img
                src={images.empowerment}
                alt="Empowerment Start"
                className="w-full max-w-sm aspect-video object-cover rounded-xl shadow-xl " 
              />
            </div>
          </div>

          {/* 2015 RIGHT */}
          <div className="relative flex flex-col md:flex-row items-center w-full">
            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-none mb-6 md:mb-0">
              <img
                src={images.community}
                alt="Community Growth"
                className="w-full max-w-sm aspect-video object-cover rounded-xl shadow-xl"
              />
            </div>
            {/* Dot */}
            <div className="absolute md:static left-1/2 transform md:transform-none -translate-x-1/2 md:translate-x-0 bg-[#FF78CB] h-6 w-6 md:h-8 md:w-8 rounded-full z-10 border-4 border-white"></div>
            {/* Text */}
            <div className="md:w-1/2 md:pl-10 text-center md:text-left">
              <div className="bg-[#3c004e] text-white p-6 rounded-2xl shadow-lg inline-block max-w-md mx-auto">
                <h3 className="text-2xl md:text-3xl text-[#FFBCE5] font-bold mb-2">
                  2015
                </h3>
                <p className="text-[#FFBCE5] text-base md:text-lg leading-relaxed">
                  Launched community centers offering training, mentorship, and
                  safe spaces for women to grow and connect.
                </p>
              </div>
            </div>
          </div>

          {/* 2020 LEFT */}
          <div className="relative flex flex-col md:flex-row items-center w-full">
            {/* Text */}
            <div className="md:w-1/2 md:pr-10 text-center md:text-right mb-6 md:mb-0">
              <div className="bg-[#3c004e] text-white p-6 rounded-2xl shadow-lg inline-block max-w-md mx-auto">
                <h3 className="text-2xl md:text-3xl text-[#FFBCE5] font-bold mb-2">
                  2020
                </h3>
                <p className="text-[#FFBCE5] text-base md:text-lg leading-relaxed">
                  Expanded globally with online initiatives, ensuring women in
                  all regions could access support, resources, and a network of
                  empowerment.
                </p>
              </div>
            </div>
            {/* Dot */}
            <div className="absolute md:static left-1/2 transform md:transform-none -translate-x-1/2 md:translate-x-0 bg-[#FF78CB] h-6 w-6 md:h-8 md:w-8 rounded-full z-10 border-4 border-white"></div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <img
                src={images.global}
                alt="Global Expansion"
                className="w-full max-w-sm aspect-video object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* 2023 RIGHT */}
          <div className="relative flex flex-col md:flex-row items-center w-full">
            {/* Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-none mb-6 md:mb-0">
              <img
                src={images.leadership}
                alt="Leadership"
                className="w-full max-w-sm aspect-video object-cover rounded-xl shadow-xl"
              />
            </div>
            {/* Dot */}
            <div className="absolute md:static left-1/2 transform md:transform-none -translate-x-1/2 md:translate-x-0 bg-[#FF78CB] h-6 w-6 md:h-8 md:w-8 rounded-full z-10 border-4 border-white"></div>
            {/* Text */}
            <div className="md:w-1/2 md:pl-10 text-center md:text-left">
              <div className="bg-[#3c004e] text-white p-6 rounded-2xl shadow-lg inline-block max-w-md mx-auto">
                <h3 className="text-2xl md:text-3xl text-[#FFBCE5] font-bold mb-2">
                  2023
                </h3>
                <p className="text-[#FFBCE5] text-base md:text-lg leading-relaxed">
                  Today, we continue to amplify women’s voices, fostering
                  leadership, equality, and change across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
