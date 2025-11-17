import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'

const services = [
  {
    title: 'Project Cargo',
    description: 'Specialized handling for oversized and heavy cargo projects. We manage complex logistics for construction equipment, machinery, and large-scale industrial projects with expert coordination and careful planning.',
    icon: '📦',
    details: [
      'Oversized and heavy lift cargo',
      'Construction equipment transport',
      'Industrial machinery shipping',
      'Project planning and coordination',
      'Specialized handling equipment',
    ],
  },
  {
    title: 'Warehousing',
    description: 'Secure storage solutions with state-of-the-art facilities. Our warehouses offer climate control, inventory management, and distribution services to keep your goods safe and accessible.',
    icon: '🏭',
    details: [
      'Climate-controlled storage',
      'Inventory management systems',
      'Distribution services',
      'Secure facilities',
      'Real-time inventory tracking',
    ],
  },
  {
    title: 'Consolidation',
    description: 'Efficient cargo consolidation services to optimize shipping costs and delivery times. We combine multiple shipments into single containers, reducing costs and improving efficiency.',
    icon: '📊',
    details: [
      'LCL (Less than Container Load)',
      'Cost optimization',
      'Multiple shipment coordination',
      'Flexible scheduling',
      'Documentation management',
    ],
  },
  {
    title: 'Sea Freight',
    description: 'Reliable ocean freight services connecting global ports with competitive rates. We offer FCL and LCL options with comprehensive tracking and documentation support.',
    icon: '🚢',
    details: [
      'FCL (Full Container Load)',
      'LCL (Less than Container Load)',
      'Global port connections',
      'Competitive rates',
      'Cargo tracking',
    ],
  },
  {
    title: 'Air Freight',
    description: 'Fast and secure air cargo solutions for time-sensitive shipments worldwide. Ideal for urgent deliveries, perishables, and high-value goods requiring rapid transit.',
    icon: '✈️',
    details: [
      'Express air freight',
      'Perishable goods handling',
      'High-value cargo security',
      'Time-sensitive delivery',
      'Global airport network',
    ],
  },
  {
    title: 'Land Freight',
    description: 'Comprehensive road and rail freight services for seamless land transportation. We provide reliable domestic and cross-border transportation with extensive coverage.',
    icon: '🚛',
    details: [
      'Road freight services',
      'Rail freight options',
      'Cross-border transportation',
      'Domestic distribution',
      'Fleet management',
    ],
  },
]

export const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy mb-12 text-center">
            Service Details
          </h2>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-cargo-orange mr-2">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-block bg-navy text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us to discuss your specific logistics requirements
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cargo-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}


