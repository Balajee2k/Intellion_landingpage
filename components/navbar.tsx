"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://finolity.com/wp-content/uploads/2025/03/cropped-Untitled-design-38.png"
              alt="Intelion"
              width={172}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center text-gray-800 hover:text-purple-600 font-medium"
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-3 gap-4 z-50">
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">Digital Solutions</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/services/digital-strategy" className="text-gray-700 hover:text-purple-600 block">
                          Digital Strategy & Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/app-development" className="text-gray-700 hover:text-purple-600 block">
                          Application Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/cloud-infrastructure"
                          className="text-gray-700 hover:text-purple-600 block"
                        >
                          Cloud & Infrastructure
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/software-as-service"
                          className="text-gray-700 hover:text-purple-600 block"
                        >
                          Software-as-a-Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">Specialized Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/services/cyber-security" className="text-gray-700 hover:text-purple-600 block">
                          Cyber Security
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-development" className="text-gray-700 hover:text-purple-600 block">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/mobile-development" className="text-gray-700 hover:text-purple-600 block">
                          Mobile Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ai-solutions" className="text-gray-700 hover:text-purple-600 block">
                          AI & Business Intelligence
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-600 mb-3">Featured Service</h3>
                    <div className="mb-3">
                      <Image
                        src="/placeholder.svg?height=120&width=200"
                        alt="Digital Transformation"
                        width={200}
                        height={120}
                        className="rounded-lg"
                      />
                    </div>
                    <h4 className="font-medium mb-1">Digital Transformation</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Transform your business with our comprehensive digital solutions.
                    </p>
                    <Link href="/services/digital-transformation" className="text-purple-600 text-sm font-medium">
                      Learn more →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("industries")}
                className="flex items-center text-gray-800 hover:text-purple-600 font-medium"
              >
                Industries
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "industries" && (
                <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-4 z-50">
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">Industries We Serve</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/industries/manufacturing" className="text-gray-700 hover:text-purple-600 block">
                          Manufacturing & Industry
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/healthcare" className="text-gray-700 hover:text-purple-600 block">
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/finance" className="text-gray-700 hover:text-purple-600 block">
                          Banking & Finance
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/logistics" className="text-gray-700 hover:text-purple-600 block">
                          Transportation & Logistics
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/consulting" className="text-gray-700 hover:text-purple-600 block">
                          Consulting Providers
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/non-profit" className="text-gray-700 hover:text-purple-600 block">
                          Non-Profit Organizations
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-600 mb-3">Industry Insights</h3>
                    <div className="mb-3">
                      <Image
                        src="/placeholder.svg?height=120&width=200"
                        alt="Industry Insights"
                        width={200}
                        height={120}
                        className="rounded-lg"
                      />
                    </div>
                    <h4 className="font-medium mb-1">Digital Transformation in Healthcare</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Learn how we're revolutionizing healthcare with innovative IT solutions.
                    </p>
                    <Link href="/case-studies/healthcare" className="text-purple-600 text-sm font-medium">
                      Read case study →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("company")}
                className="flex items-center text-gray-800 hover:text-purple-600 font-medium"
              >
                Company
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "company" && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-4 z-50">
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">About Us</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about" className="text-gray-700 hover:text-purple-600 block">
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link href="/team" className="text-gray-700 hover:text-purple-600 block">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-gray-700 hover:text-purple-600 block">
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link href="/partnerships" className="text-gray-700 hover:text-purple-600 block">
                          Partners & Certifications
                        </Link>
                      </li>
                      <li>
                        <Link href="/reviews" className="text-gray-700 hover:text-purple-600 block">
                          Reviews & Awards
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-600 mb-3">Latest News</h3>
                    <div className="mb-3">
                      <Image
                        src="/placeholder.svg?height=120&width=200"
                        alt="Company News"
                        width={200}
                        height={120}
                        className="rounded-lg"
                      />
                    </div>
                    <h4 className="font-medium mb-1">Intelion Wins Industry Award</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Recognized for excellence in digital innovation and client satisfaction.
                    </p>
                    <Link href="/news/industry-award" className="text-purple-600 text-sm font-medium">
                      Read more →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-800 hover:text-purple-600 font-medium">
              Blog
            </Link>
          </nav>

          {/* Right Side - Contact & Support */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-500">Client Support</span>
              <a href="tel:06122500971" className="text-gray-800 font-medium">
                0612-2500971
              </a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => toggleDropdown("mobile-services")}
                  className="flex items-center justify-between w-full text-gray-800 font-medium py-2"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-services" && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link href="/services/digital-strategy" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Digital Strategy & Design
                    </Link>
                    <Link href="/services/app-development" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Application Development
                    </Link>
                    <Link
                      href="/services/cloud-infrastructure"
                      className="block text-gray-700 py-1"
                      onClick={closeMenu}
                    >
                      Cloud & Infrastructure
                    </Link>
                    <Link href="/services/software-as-service" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Software-as-a-Service
                    </Link>
                    <Link href="/services/cyber-security" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Cyber Security
                    </Link>
                    <Link href="/services/web-development" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Web Development
                    </Link>
                    <Link href="/services/mobile-development" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Mobile Development
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown("mobile-industries")}
                  className="flex items-center justify-between w-full text-gray-800 font-medium py-2"
                >
                  Industries
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-industries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-industries" && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link href="/industries/manufacturing" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Manufacturing & Industry
                    </Link>
                    <Link href="/industries/healthcare" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Healthcare
                    </Link>
                    <Link href="/industries/finance" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Banking & Finance
                    </Link>
                    <Link href="/industries/logistics" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Transportation & Logistics
                    </Link>
                    <Link href="/industries/consulting" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Consulting Providers
                    </Link>
                    <Link href="/industries/non-profit" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Non-Profit Organizations
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown("mobile-company")}
                  className="flex items-center justify-between w-full text-gray-800 font-medium py-2"
                >
                  Company
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-company" && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link href="/about" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Our Story
                    </Link>
                    <Link href="/team" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Our Team
                    </Link>
                    <Link href="/careers" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Careers
                    </Link>
                    <Link href="/partnerships" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Partners & Certifications
                    </Link>
                    <Link href="/reviews" className="block text-gray-700 py-1" onClick={closeMenu}>
                      Reviews & Awards
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/blog" className="block text-gray-800 font-medium py-2" onClick={closeMenu}>
                Blog
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Client Support:</span>
                    <a href="tel:06122500971" className="text-gray-800 font-medium">
                      0612-2500971
                    </a>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 w-full" onClick={closeMenu}>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

