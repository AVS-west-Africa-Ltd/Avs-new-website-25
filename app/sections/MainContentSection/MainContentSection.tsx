"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const HeaderSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Process", href: "/our-process" },
    { label: "Resources", href: "/resources" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Build with AI", href: "/build-with-ai" },
  ];

  const dropdownItems = [
    // {
    //   label: "Services",
    //   href: "/resources/services",
    //   icon: (
    //     <svg
    //       width="19"
    //       height="19"
    //       viewBox="0 0 19 19"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M15.4375 9.95283L9.50003 15.8333L3.56253 9.95283C3.1709 9.57173 2.86242 9.11367 2.65651 8.6075C2.4506 8.10132 2.35173 7.558 2.36612 7.01173C2.38051 6.46547 2.50785 5.9281 2.74012 5.43347C2.97239 4.93884 3.30456 4.49765 3.71571 4.1377C4.12686 3.77775 4.60809 3.50683 5.12909 3.342C5.65009 3.17717 6.19958 3.122 6.74295 3.17996C7.28632 3.23793 7.8118 3.40777 8.28631 3.6788C8.76082 3.94982 9.17406 4.31616 9.50003 4.75474C9.82742 4.31935 10.2411 3.95621 10.7153 3.68806C11.1895 3.41991 11.7139 3.25252 12.2558 3.19637C12.7976 3.14021 13.3452 3.19651 13.8643 3.36172C14.3834 3.52694 14.8628 3.79752 15.2725 4.15653C15.6822 4.51555 16.0134 4.95526 16.2454 5.44816C16.4773 5.94106 16.605 6.47653 16.6205 7.02106C16.636 7.56558 16.5389 8.10745 16.3354 8.61273C16.1318 9.11802 15.8262 9.57585 15.4375 9.95758M9.50006 4.75L6.89311 7.35696C6.74469 7.50542 6.66132 7.70675 6.66132 7.91667C6.66132 8.12659 6.74469 8.32792 6.89311 8.47637L7.32298 8.90625C7.86923 9.4525 8.7559 9.4525 9.30215 8.90625L10.0938 8.11458C10.5662 7.64217 11.207 7.37677 11.8751 7.37677C12.5432 7.37677 13.1839 7.64217 13.6563 8.11458L15.4376 9.89583M9.89602 12.2708L11.4793 13.8542M11.8752 10.2917L13.4585 11.875"
    //         stroke="black"
    //         strokeWidth="1.58333"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   ),
    // },
    {
      label: "Resources",
      href: "/resources",
      icon: (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.16667 5.54167H5.54167C5.75163 5.54167 5.95299 5.45826 6.10146 5.30979C6.24993 5.16133 6.33333 4.95996 6.33333 4.75V3.95833C6.33333 3.53841 6.50015 3.13568 6.79708 2.83875C7.09401 2.54181 7.49674 2.375 7.91667 2.375C8.33659 2.375 8.73932 2.54181 9.03625 2.83875C9.33318 3.13568 9.5 3.53841 9.5 3.95833V4.75C9.5 4.95996 9.58341 5.16133 9.73187 5.30979C9.88034 5.45826 10.0817 5.54167 10.2917 5.54167H12.6667C12.8766 5.54167 13.078 5.62507 13.2265 5.77354C13.3749 5.92201 13.4583 6.12337 13.4583 6.33333V8.70833C13.4583 8.9183 13.5417 9.11966 13.6902 9.26813C13.8387 9.41659 14.04 9.5 14.25 9.5H15.0417C15.4616 9.5 15.8643 9.66682 16.1613 9.96375C16.4582 10.2607 16.625 10.6634 16.625 11.0833C16.625 11.5033 16.4582 11.906 16.1613 12.2029C15.8643 12.4999 15.4616 12.6667 15.0417 12.6667H14.25C14.04 12.6667 13.8387 12.7501 13.6902 12.8985C13.5417 13.047 13.4583 13.2484 13.4583 13.4583V15.8333C13.4583 16.0433 13.3749 16.2447 13.2265 16.3931C13.078 16.5416 12.8766 16.625 12.6667 16.625H10.2917C10.0817 16.625 9.88034 16.5416 9.73187 16.3931C9.58341 16.2447 9.5 16.0433 9.5 15.8333V15.0417C9.5 14.6217 9.33318 14.219 9.03625 13.9221C8.73932 13.6251 8.33659 13.4583 7.91667 13.4583C7.49674 13.4583 7.09401 13.6251 6.79708 13.9221C6.50015 14.219 6.33333 14.6217 6.33333 15.0417V15.8333C6.33333 16.0433 6.24993 16.2447 6.10146 16.3931C5.95299 16.5416 5.75163 16.625 5.54167 16.625H3.16667C2.9567 16.625 2.75534 16.5416 2.60687 16.3931C2.45841 16.2447 2.375 16.0433 2.375 15.8333V13.4583C2.375 13.2484 2.45841 13.047 2.60687 12.8985C2.75534 12.7501 2.9567 12.6667 3.16667 12.6667H3.95833C4.37826 12.6667 4.78099 12.4999 5.07792 12.2029C5.37485 11.906 5.54167 11.5033 5.54167 11.0833C5.54167 10.6634 5.37485 10.2607 5.07792 9.96375C4.78099 9.66682 4.37826 9.5 3.95833 9.5H3.16667C2.9567 9.5 2.75534 9.41659 2.60687 9.26813C2.45841 9.11966 2.375 8.9183 2.375 8.70833V6.33333C2.375 6.12337 2.45841 5.92201 2.60687 5.77354C2.75534 5.62507 2.9567 5.54167 3.16667 5.54167Z"
            stroke="black"
            strokeWidth="1.58333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-0 top-0" : ""
      }`}
    >
      <div className={`py-4 relative bg-[#f0f0f0] backdrop-blur-[2.5px] overflow-visible mx-auto ${scrolled ? 'rounded-none' : 'rounded-b-[26px]'}`}>
        <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Left side navigation items */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`relative font-medium text-sm md:text-[15px] tracking-[-0.30px] whitespace-nowrap cursor-pointer hover:text-black transition-colors ${
                          pathname === item.href
                            ? "text-black font-bold"
                            : "text-[#0f0f0fa6]"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Dropdown Menu */}
                {/* <NavigationMenuItem className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center gap-1 font-normal text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap cursor-pointer hover:text-black transition-colors ${
                      pathname === "/offerings" ||
                      // pathname === "/services" ||
                      pathname === "/resources"
                        ? "text-black font-bold"
                        : "text-[#0f0f0fa6]"
                    }`}
                  >
                    Offerings{" "}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        dropdownOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-4 w-[240px] bg-white rounded-lg shadow-lg z-50 overflow-visible"
                      style={{
                        transform: "translateY(0)",
                        opacity: 1,
                        pointerEvents: "auto",
                      }}
                    >
                      {dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.icon}

                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </NavigationMenuItem> */}

                {navItems.slice(5).map((item, index) => (
                  <NavigationMenuItem key={index + 3}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`relative w-fit font-normal text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap cursor-pointer hover:text-black transition-colors ${
                          pathname === item.href
                            ? "text-black font-bold"
                            : "text-[#0f0f0fa6]"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link href="/">
              <img
                src="/assets/AVS Logo.svg"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain w-[120px] md:w-[150px]"
              />
            </Link>
          </div>

          {/* Buttons and mobile menu toggle - right side */}
          <div className="flex items-center justify-end gap-4 flex-1">
            {/* Wrapper div for responsive visibility */}
            <div className="hidden md:block">
              <button
                onClick={() => router.push("/contact-us")}
                className="cursor-pointer py-2 px-4 flex gap-3 items-center rounded-full font-normal text-white bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <span className="flex items-center gap-2 text-[15px]">Get in touch</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5847 2.75H2.58472C1.89722 2.75 1.34097 3.3125 1.34097 4L1.33472 11.5C1.33472 12.1875 1.89722 12.75 2.58472 12.75H12.5847C13.2722 12.75 13.8347 12.1875 13.8347 11.5V4C13.8347 3.3125 13.2722 2.75 12.5847 2.75ZM12.5847 5.25L7.58472 8.375L2.58472 5.25V4L7.58472 7.125L12.5847 4V5.25Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-gray-900" />
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 1, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto"
          >
            <div className="flex justify-between items-center py-4 px-6 border-b border-gray-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/assets/AVS Logo.svg"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="object-contain w-[120px]"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-900" />
              </button>
            </div>
            <motion.nav className="flex flex-col p-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-4 text-2xl font-medium ${
                      pathname === item.href ? "text-black" : "text-gray-600"
                    } hover:text-black transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Offerings dropdown */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 * 0.05 }}
              >
                <div className="block py-4 text-2xl font-medium text-gray-600">
                  Offerings
                </div>
                <div className="pl-4 mb-2">
                  {dropdownItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-3 py-3 text-lg text-gray-500 hover:text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div> */}

              {/* Remaining navigation items */}
              {navItems.slice(5).map((item, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (index + 4) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-4 text-2xl font-medium ${
                      pathname === item.href ? "text-black" : "text-gray-600"
                    } hover:text-black transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-12"
              >
                <Button
                  onClick={() => {
                    router.push("/contact-us");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-12 rounded-full font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  Get in touch
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};