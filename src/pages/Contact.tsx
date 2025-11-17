import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team for reliable logistics solutions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+254718887799"
                      className="text-gray-600 hover:text-navy transition-colors"
                    >
                      +254 718 88 77 99
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@qaliilcargo.com"
                      className="text-gray-600 hover:text-navy transition-colors"
                    >
                      info@qaliilcargo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Qaliil Cargo Services Limited<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-100 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600">
                  Google Map integration can be added here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


