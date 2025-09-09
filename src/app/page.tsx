import About from '@/components/About'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      
      {/* Placeholder sections for future development */}
      {/* <div id="projects" className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800">Projects Section Coming Soon...</h2>
      </div>
      
      <div id="contact" className="min-h-screen bg-gray-200 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact Section Coming Soon...</h2>
      </div> */}
    </main>
  )
}
