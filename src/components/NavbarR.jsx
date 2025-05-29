import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaFlask, FaCalculator, FaFileAlt, FaUser, FaChartBar, FaBars, FaTimes } from 'react-icons/fa';

const NavbarR = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navbarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navigation - Vertical Left Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-sky-400 to-blue-500 shadow-lg z-50">
        <div className="flex flex-col h-full p-4">
          {/* Logo/Brand */}
          <div className="mb-8 mt-4 flex justify-center">
            <NavLink to="/" className="flex items-center">
              <img
                src="/src/assets/logo.png"
                alt="SBPL Logo"
                className="h-30 w-auto"
              />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive('/') ? 'bg-blue-700 text-white shadow-md' : 'text-white hover:bg-blue-600 hover:shadow-md'}`}
            >
              <FaHome className="mr-3 text-lg" />
              <span>Soil Report</span>
            </NavLink>

            <NavLink
              to="/fertilizer-calculator"
              onClick={closeMobileMenu}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive('/fertilizer-calculator') ? 'bg-blue-700 text-white shadow-md' : 'text-white hover:bg-blue-600 hover:shadow-md'}`}
            >
              <FaCalculator className="mr-3 text-lg" />
              <span>Fertilizer Calculator</span>
            </NavLink>

            <div 
              className="relative"
              ref={navbarRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${(isActive('/WaterReport') || isActive('/Irrigation')) ? 'bg-blue-700 text-white shadow-md' : 'text-white hover:bg-blue-600 hover:shadow-md'}`}
              >
                <div className="flex items-center">
                  <FaFlask className="mr-3 text-lg" />
                  <span>Water Report</span>
                </div>
                <svg className="ml-1 h-4 w-4 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-full ml-2 top-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
                  <NavLink
                    to="/WaterReport"
                    onClick={() => {
                      closeMobileMenu();
                      setDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 transition-colors duration-200"
                  >
                    Drinking Water
                  </NavLink>
                  <NavLink
                    to="/Irrigation"
                    onClick={() => {
                      closeMobileMenu();
                      setDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 transition-colors duration-200"
                  >
                    Irrigation
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* User Profile/Footer */}
          <div className="mt-auto pt-4 border-t border-blue-300">
            <NavLink
              to="/profile"
              onClick={closeMobileMenu}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive('/profile') ? 'bg-blue-700 text-white shadow-md' : 'text-white hover:bg-blue-600 hover:shadow-md'}`}
            >
              <FaUser className="mr-3 text-lg" />
              <span>Profile</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-lg z-50">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Logo/Brand */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="SBPL Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Placeholder for alignment */}
          <div className="w-6"></div>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="bg-white shadow-xl pb-4">
            <nav className="flex flex-col space-y-1 px-2">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${isActive('/') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                <FaHome className="mr-3 text-lg" />
                <span>Soil Report</span>
              </NavLink>

              <NavLink
                to="/fertilizer-calculator"
                onClick={closeMobileMenu}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${isActive('/fertilizer-calculator') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                <FaCalculator className="mr-3 text-lg" />
                <span>Fertilizer Calculator</span>
              </NavLink>

              <div className="px-4 py-2 text-sm font-medium text-gray-500">
                Water Reports
              </div>
              
              <NavLink
                to="/WaterReport"
                onClick={closeMobileMenu}
                className={`flex items-center px-8 py-2 rounded-lg text-sm font-medium ${isActive('/WaterReport') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                <span>Drinking Water</span>
              </NavLink>
              
              <NavLink
                to="/Irrigation"
                onClick={closeMobileMenu}
                className={`flex items-center px-8 py-2 rounded-lg text-sm font-medium ${isActive('/Irrigation') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                <span>Irrigation</span>
              </NavLink>

              <div className="border-t border-gray-200 my-2"></div>

              <NavLink
                to="/profile"
                onClick={closeMobileMenu}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${isActive('/profile') ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50'}`}
              >
                <FaUser className="mr-3 text-lg" />
                <span>Profile</span>
              </NavLink>
            </nav>
          </div>
        )}
      </div>

      {/* Add padding to content to account for fixed navbar */}
      <div className="md:pl-64 pt-16 md:pt-0"></div>
    </>
  );
};

export default NavbarR;