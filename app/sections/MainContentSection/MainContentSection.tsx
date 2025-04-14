"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const HeaderSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    // { label: "About", href: "/about" },
    { label: "Our Process", href: "/our-process" },
    // { label: "Services", href: "/services" },
    // { label: "Our Work", href: "/our-work" },
    // { label: "Build with AI", href: "/build-with-ai" },
    { label: "Case Studies", href: "/case-studies" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 z-50 transition-all duration-300 ${
        scrolled ? "py-0 top-0" : ""
      }`}
    >
      <div className="py-4 relative rounded-[0px_0px_26px_26px] bg-[#f0f0f0] backdrop-blur-[2.5px] overflow-hidden mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between h-full px-6 lg:px-12">
          {/* Navigation menu - left side for desktop */}
          <div className="hidden lg:flex flex-1">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navItems.slice(0, 5).map((item, index) => (
                  <NavigationMenuItem key={index}>
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

          {/* Logo - centered */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <Link href="/">
              <img
                src="/assets/AVS Logo.svg"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Buttons and mobile menu toggle - right side */}
          <div className="flex items-center justify-end gap-4 flex-1">
            {/* Wrapper div for responsive visibility */}
            <div className="hidden md:block">
              <Button
                onClick={() => router.push("/contact-us")}
                variant="default"
                size="lg"
                className="rounded-full font-normal text-white bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </Button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {/* {mobileMenuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : ( */}
              <Menu size={24} className="text-gray-900" />
              {/* )} */}
            </button>
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
            className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-40"
          >
            <div className="flex justify-between items-center py-4 px-6 border-b border-gray-100">
              <Link href="/">
                <img
                  src="/assets/AVS Logo.svg"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="object-contain"
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
            <motion.nav
              className="flex flex-col p-6"
              transition={{ duration: 0.3 }}
            >
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
                  className="w-auto h-12 rounded-full font-normal text-white bg-gray-900 hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  <span>Get in touch</span>
                  <span className="ml-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 3H2.75C2.0625 3 1.50625 3.5625 1.50625 4.25L1.5 11.75C1.5 12.4375 2.0625 13 2.75 13H12.75C13.4375 13 14 12.4375 14 11.75V4.25C14 3.5625 13.4375 3 12.75 3ZM12.75 5.5L7.75 8.625L2.75 5.5V4.25L7.75 7.375L12.75 4.25V5.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
