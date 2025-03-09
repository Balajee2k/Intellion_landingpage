"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-6">
              Introducing Intelion
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Transforming Ideas into{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Empowering businesses with innovative solutions that drive growth, enhance efficiency, and create
              exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Innovative Solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Expert Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Proven Results</span>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
              <Image
                src="https://finolity.com/wp-content/uploads/2024/02/White-Simple-Woman-Photo-Sale-or-Business-Womens-Beauty-Facebook-Cover.jpg"
                alt="Intelion Platform Dashboard"
                width={800}
                height={600}
                className="rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

