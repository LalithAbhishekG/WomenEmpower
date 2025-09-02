import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import contactbg from '../assets/Contact/contact-bg.png';

function ContactUs() {
    return (
        <section
            className="w-full py-20 bg-cover bg-center flex flex-col items-center bg-fixed"
            style={{
                backgroundImage: `url(${contactbg})`,
            }}
        >
            <div className="w-full max-w-6xl px-6">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Call Us */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all border border-white/20 text-white">
                        <Phone className="mx-auto text-[#7a2c74]" size={40} />
                        <h3 className="mt-4 text-lg font-semibold ">CALL US</h3>
                        <p className="mt-2 text-gray-300">619-333-0026</p>
                    </div>

                    {/* Address */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all border border-white/20 text-white">
                        <MapPin className="mx-auto text-[#7a2c74]" size={40} />
                        <h3 className="mt-4 text-lg font-semibold ">ADDRESS</h3>
                        <p className="mt-2 text-gray-300">P.O. Box 501406</p>
                        <p className="text-gray-300">San Diego, California</p>
                        <p className="text-gray-300">92150-1406</p>
                    </div>

                    {/* Email */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all border border-white/20 text-white">
                        <Mail className="mx-auto text-[#7a2c74]" size={40} />
                        <h3 className="mt-4 text-lg font-semibold ">EMAIL</h3>
                        <p className="mt-2 text-gray-300">info@womenempowerment.org</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div
                    className="w-full max-w-3xl mx-auto p-10 
                                         bg-white/10 backdrop-blur-lg 
                                         rounded-2xl shadow-2xl
                                         text-center border border-white/20 text-white"
                >
                    <h2 className="text-4xl md:text-5xl font-bold ">Contact Us</h2>
                    <p className="mt-3 text-lg text-gray-300">
                        We'd love to hear from you! Fill out the form below and let’s connect.
                    </p>

                    <form className="mt-8 space-y-6">
                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-5 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300
                                                     focus:outline-none focus:ring-2 focus:ring-[#7a2c74] transition-all duration-200"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-5 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300
                                                     focus:outline-none focus:ring-2 focus:ring-[#7a2c74] transition-all duration-200"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full px-5 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300
                                                     focus:outline-none focus:ring-2 focus:ring-[#7a2c74] transition-all duration-200"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-[#7a2c74] hover:bg-[#5b1f56] 
                                                 rounded-lg font-semibold text-white text-lg 
                                                 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
