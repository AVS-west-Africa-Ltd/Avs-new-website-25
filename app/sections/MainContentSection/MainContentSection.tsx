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
    { label: "About", href: "/about" },
    { label: "Our Process", href: "/our-process" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/our-work" },
    { label: "Build with AI", href: "/build-with-ai" },
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
                            ? "text-black"
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

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => router.push("/newsletter")}
              variant="outline"
              size="sm"
              className="rounded-full font-medium text-gray-900 border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Join Newsletter
            </Button>
            <Button
              onClick={() => router.push("/contact-us")}
              variant="default"
              size="sm"
              className="rounded-full font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </Button>
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
                    className={`block py-4 text-xl font-medium ${
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
                transition={{ delay: (navItems.length + 1) * 0.05 }}
                className="mt-6 flex flex-col gap-4"
              >
                <Button
                  onClick={() => {
                    router.push("/newsletter");
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full h-12 rounded-full font-medium text-gray-900 border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  Join Newsletter
                </Button>
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