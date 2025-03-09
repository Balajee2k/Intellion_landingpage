"use client"
import { useEffect, useState } from "react"
import { Zap, BarChart, Shield, Users, Globe, Cpu } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Managed Services",
    description:
      "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
    link: "/services/managed-services",
  },
  {
    icon: <BarChart className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "IT Consulting & Advisory",
    description:
      "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.",
    link: "/services/it-consulting",
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Cyber Security",
    description:
      "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
    link: "/services/cyber-security",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Web Development",
    description:
      "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
    link: "/services/web-development",
  },
  {
    icon: <Globe className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Mobile Development",
    description:
      "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
    link: "/services/mobile-development",
  },
  {
    icon: <Cpu className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    title: "Cloud Services",
    description:
      "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
    link: "/services/cloud-services",
  },
]

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".feature-item").forEach((item) => {
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
            Services
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive IT Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Empowering your business with innovative technology solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-item relative p-8 border border-gray-200 dark:border-gray-800 rounded-xl transition-all duration-700 transform ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 dark:from-purple-900/10 to-indigo-50 dark:to-indigo-900/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="flex flex-col h-full">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 flex-grow">{feature.description}</p>
                <div className="mt-6">
                  <Link
                    href={feature.link || "#"}
                    className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

