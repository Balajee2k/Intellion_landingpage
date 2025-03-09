"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(document.querySelector("#about-section") as Element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <div className="relative">
                <Image
                  src="https://finolity.com/wp-content/uploads/2024/01/finolity-Team.jpg"
                  alt="About Intelion"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 text-center">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-base font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
              About Us
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-6">
              Pioneering Digital Innovation Since 2013
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At Intelion, we're passionate about transforming businesses through innovative technology solutions. Our
              team of experts combines technical expertise with creative thinking to deliver exceptional results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Industry Expertise</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Deep knowledge across multiple industries to provide tailored solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Client-Focused Approach</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We prioritize understanding your unique needs to deliver personalized solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Continuous Innovation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We stay at the forefront of technology to bring you cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Our Services
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20"
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

