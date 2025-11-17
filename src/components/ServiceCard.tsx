import { Link } from 'react-router-dom'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  link?: string
}

export const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  const content = (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
      {icon && (
        <div className="text-4xl mb-4 text-navy">{icon}</div>
      )}
      <h3 className="text-xl font-heading font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link
        to={link || '/contact'}
        className="text-navy font-semibold hover:text-cargo-orange transition-colors inline-flex items-center"
      >
        Learn More →
      </Link>
    </div>
  )

  return link ? (
    <Link to={link} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  )
}


