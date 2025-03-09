import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

// In page.tsx
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

