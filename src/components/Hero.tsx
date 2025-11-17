import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-r from-navy to-navy/90">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/container-bg.jpg')",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
          Reliable Global Logistics
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Sea, Air & Land Freight Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-cargo-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+254718887799"
            className="bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Call Us: +254 718 88 77 99
          </a>
        </div>
      </div>
    </section>
  )
}


