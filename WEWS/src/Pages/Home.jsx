'use client';
import React, { useEffect, useState } from 'react';
import ReactLenis from 'lenis/react';
import Lenis from 'lenis';
import hero from '../assets/Home/hero-bg.png';
import sect2bg from '../assets/Home/section2-bg.png';
import sect2hero from '../assets/Home/sect2-hero.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    const scrollHandler = () => {
      lenis.resize();
    };

    window.addEventListener('resize', scrollHandler);
    return () => {
      lenis.destroy();
      window.removeEventListener('resize', scrollHandler);
    };
  }, []);

  return (
    <>
      <Header />

      <ReactLenis root>
        {/* Hero Section */}
        <section
          className="min-h-screen flex items-center justify-center px-4 md:px-8 relative bg-purple-900 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div
            className={`text-center max-w-3xl transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-white font-normal tracking-wider mb-2 text-[clamp(1rem,2vw,1.25rem)]">
              Join Us
            </p>
            <h1
              className="text-pink-200 font-extrabold tracking-wide mb-[-0.5em]"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              }}
            >
              WORLD WOMEN
            </h1>
            <h1
              className="text-pink-200 font-extrabold tracking-wide mb-4"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              }}
            >
              EMPOWERMENT
            </h1>
            <p className="text-white max-w-2xl mx-auto tracking-wide leading-relaxed text-[clamp(0.875rem,2vw,1.25rem)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
              iste id libero.
            </p>

            <button
              className="relative z-10 font-bold text-[clamp(1rem,2vw,1.25rem)] bg-[#4f006e] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl overflow-hidden w-full max-w-xs mx-auto
                        after:content-[''] after:absolute after:top-0 after:right-0 after:w-0 after:h-full after:-z-10
                        after:bg-[#b65dff] after:rounded-md hover:text-pink-950
                        after:shadow-[inset_2px_2px_2px_rgba(255,255,255,0.5),7px_7px_20px_rgba(0,0,0,0.1),4px_4px_5px_rgba(0,0,0,0.1)]
                        after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full
                        active:top-[2px] disabled:opacity-70 mt-10"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Section 2 */}
        <section
          className="min-h-screen bg-purple-900 flex items-center justify-center px-4 py-12 bg-cover bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${sect2bg})` }}
        >
          <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="bg-black/50 p-6 sm:p-8 md:p-10 shadow-lg flex-1 flex flex-col justify-center rounded-lg">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white mb-6">
                WHO ARE WE
              </h2>
              <p className="text-gray-200 text-[clamp(1rem,2vw,1.125rem)] mb-4 leading-relaxed">
                dhiuhq wd iuhd qiuhd iqhiudhqd iuhd uqihdiu hdhiqj uhddnazxkj
                anwqjdp uwhd oaS \D KQDJQASJN QHSOI jj owqijd oazm
              </p>
              <p className="text-gray-200 text-[clamp(1rem,2vw,1.125rem)] mb-4 leading-relaxed">
                qa daoisdjwjd jqa qjdijsa opijiajd oajosj djoaj sodij qao djaoj
                oasjodao isjlkzxpwk pws ampd ds qwijd s apj djoqj asidkowpwd
                okajits dptfak wmcamimd aufnalphow isj dklamwqok poda ks dmak
                dpwojdajappa jawjapi apoapajda
              </p>
              <p className="text-gray-200 text-[clamp(1rem,2vw,1.125rem)] leading-relaxed">
                ao djaojj do o ahdoahjisdsoij wjida oidos jkmad slkaojdo jamd
                ajdojasoi jdaosi dasoi djsaasjoi asdij oasij aoij djaooja oij
                adojaoji aodij aoaoi odaiodaa
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex items-center justify-center">
              <div
                className="w-full aspect-[4/3] md:aspect-[16/9] border border-purple-400 shadow-md transition-transform duration-300 hover:scale-[1.02] bg-cover bg-center bg-no-repeat rounded-lg"
                style={{ backgroundImage: `url(${sect2hero})` }}
              ></div>
            </div>
          </div>
        </section>

        <Footer />
      </ReactLenis>
    </>
  );
};

export default Home;
