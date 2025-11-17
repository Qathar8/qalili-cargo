export const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Qaliil Cargo Services Limited
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in global logistics
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">
                Company Overview
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Qaliil Cargo Services Limited is a premier logistics and freight forwarding
                company with a strong commitment to delivering excellence in global supply
                chain management. We specialize in providing comprehensive freight solutions
                across sea, air, and land transportation.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With years of industry experience, we have built a reputation for reliability,
                efficiency, and customer-centric service. Our team of logistics experts works
                tirelessly to ensure your cargo reaches its destination safely and on time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We serve clients across various industries, from manufacturing and retail to
                construction and energy, providing tailored solutions that meet unique business
                requirements.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-6xl mb-4">🚢</div>
              <h3 className="text-2xl font-heading font-semibold text-navy mb-4">
                Our Expertise
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cargo-orange mr-2">✓</span>
                  <span>International freight forwarding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cargo-orange mr-2">✓</span>
                  <span>Customs clearance and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cargo-orange mr-2">✓</span>
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cargo-orange mr-2">✓</span>
                  <span>Project cargo management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cargo-orange mr-2">✓</span>
                  <span>Warehousing and distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, efficient, and cost-effective logistics solutions that
                enable our clients to succeed in the global marketplace while maintaining
                the highest standards of service excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading logistics provider in the region, recognized for
                innovation, reliability, and exceptional customer service in global freight
                forwarding.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Integrity & Transparency</li>
                <li>• Customer Focus</li>
                <li>• Operational Excellence</li>
                <li>• Innovation & Adaptability</li>
                <li>• Safety & Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Experience the difference of working with a trusted logistics partner
          </p>
          <a
            href="/contact"
            className="inline-block bg-cargo-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}


