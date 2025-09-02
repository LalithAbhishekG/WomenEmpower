import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Our Impact", link: "#impact" },
    { label: "Get Involved", link: "#involved" },
    { label: "Contact", link: "#contact" },
    { label: "News & Events", link: "#news" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-colors ${
            scrolled ? "text-pink-950" : "text-white"
          }`}
        >
          Logo
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {/* About Us Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 font-medium transition-colors ${
                scrolled
                  ? "text-pink-950 hover:text-pink-700"
                  : "text-white hover:text-gray-200"
              }`}
            >
              About Us <ChevronDown size={18} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg py-2 w-48">
                <a
                  href="#mission"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Our Mission
                </a>
                <a
                  href="#vision"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Our Vision
                </a>
                <a
                  href="#team"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Meet our Team
                </a>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`font-medium transition-colors ${
                scrolled
                  ? "text-pink-950 hover:text-pink-700"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={28} className={scrolled ? "text-pink-950" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-pink-950" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden flex flex-col space-y-4 px-6 py-4 transition-all duration-300 ${
            scrolled ? "bg-white text-pink-950" : "bg-pink-950 text-white"
          }`}
        >
          {/* About Us Dropdown (Mobile) */}
          <div className="flex flex-col">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between py-2 font-medium"
            >
              About Us <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div className="flex flex-col pl-4">
                <a href="#mission" className="py-2 hover:opacity-80">
                  Our Mission
                </a>
                <a href="#vision" className="py-2 hover:opacity-80">
                  Our Vision
                </a>
                <a href="#team" className="py-2 hover:opacity-80">
                  Meet our Team
                </a>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {navItems.map((item, i) => (
            <a key={i} href={item.link} className="py-2 font-medium hover:opacity-80">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
