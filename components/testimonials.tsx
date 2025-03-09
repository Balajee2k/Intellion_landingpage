"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Intelion transformed our digital presence completely. Their team delivered a solution that exceeded our expectations and helped us achieve remarkable growth.",
    author: "Sarah Johnson",
    position: "CEO, TechVision",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Working with Intelion has been a game-changer for our business. Their innovative approach and attention to detail resulted in a platform that our customers love.",
    author: "Michael Chen",
    position: "CTO, GrowthLabs",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The team at Intelion understood our requirements perfectly and delivered a solution that has significantly improved our operational efficiency.",
    author: "Emily Rodriguez",
    position: "Operations Director, Nexus Group",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    content:
      "Intelion's expertise in digital transformation helped us navigate complex challenges and implement solutions that drive real business value.",
    author: "David Wilson",
    position: "Marketing VP, Elevate Inc",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const maxIndex = Math.ceil(testimonials.length / 2) - 1
  const testimonialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div ref={testimonialRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">What Our Clients Say</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>

        <div className="relative">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(currentIndex * 2, currentIndex * 2 + 2).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center space-x-2 mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {Array(maxIndex + 1)
                .fill(0)
                .map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentIndex ? "bg-purple-600 dark:bg-purple-400" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial set ${i + 1}`}
                  />
                ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

