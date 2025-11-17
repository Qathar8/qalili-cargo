import { Hero } from '../components/Hero'
import { ServiceCard } from '../components/ServiceCard'

const services = [
  {
    title: 'Project Cargo',
    description: 'Specialized handling for oversized and heavy cargo projects with expert logistics coordination.',
    icon: '📦',
  },
  {
    title: 'Warehousing',
    description: 'Secure storage solutions with state-of-the-art facilities and inventory management.',
    icon: '🏭',
  },
  {
    title: 'Consolidation',
    description: 'Efficient cargo consolidation services to optimize shipping costs and delivery times.',
    icon: '📊',
  },
  {
    title: 'Sea Freight',
    description: 'Reliable ocean freight services connecting global ports with competitive rates.',
    icon: '🚢',
  },
  {
    title: 'Air Freight',
    description: 'Fast and secure air cargo solutions for time-sensitive shipments worldwide.',
    icon: '✈️',
  },
  {
    title: 'Land Freight',
    description: 'Comprehensive road and rail freight services for seamless land transportation.',
    icon: '🚛',
  },
]

const whyChooseUs = [
  {
    title: 'Global Coverage',
    description: 'Extensive network spanning major ports and cities worldwide',
    icon: '🌍',
  },
  {
    title: 'Safety First',
    description: 'Committed to the highest safety standards and compliance',
    icon: '🛡️',
  },
  {
    title: 'Fast Turnaround',
    description: 'Efficient processes ensuring quick and reliable delivery',
    icon: '⚡',
  },
  {
    title: 'Real-Time Tracking',
    description: 'Advanced tracking systems to monitor your cargo every step',
    icon: '📍',
  },
]

export const Home = () => {
  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              About Qaliil Cargo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qaliil Cargo Services Limited is a leading logistics provider specializing in
              comprehensive freight solutions. With years of experience, we deliver reliable,
              efficient, and cost-effective logistics services across sea, air, and land
              transportation networks.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} link="/services" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Ship?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get a free quote today and experience reliable logistics solutions
          </p>
          <a
            href="/contact"
            className="inline-block bg-cargo-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  )
}


