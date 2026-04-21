import Nav from '@/components/nav'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import Process from '@/components/process'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  )
}
