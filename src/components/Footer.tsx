import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">Qaliil Cargo Services Limited</h3>
            <p className="text-gray-300 mb-4">
              Reliable Global Logistics — Sea, Air & Land Freight Solutions
            </p>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+254718887799" className="hover:text-white">
                  +254 718 88 77 99
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@qaliilcargo.com" className="hover:text-white">
                  info@qaliilcargo.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Project Cargo</li>
              <li>Warehousing</li>
              <li>Consolidation</li>
              <li>Sea Freight</li>
              <li>Air Freight</li>
              <li>Land Freight</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Qaliil Cargo Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


