import { DotGrid } from '../components/DotGrid'
import { FaGithub, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa'

const contacts = [
  {
    name: 'GitHub',
    icon: <FaGithub size={24} />,
    link: 'https://github.com/skikozou',
    display: 'skikozou',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={24} />,
    link: 'https://twitter.com/skikozou1596',
    display: '@skikozou1596',
  },
  {
    name: 'Discord',
    icon: <FaDiscord size={24} />,
    display: '@skikozou1596',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube size={24} />,
    link: 'https://youtube.com/@skikozou',
    display: 'skikozou',
  },
]

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <DotGrid />

      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="theme-bg-simple rounded-lg p-8 max-w-3xl w-full relative">
          <div className="absolute inset-0 theme-bg-shadow rounded-lg -z-10 translate-x-[var(--shadow-location)] translate-y-[var(--shadow-location)]" />

          <h1 className="text-3xl font-bold text-center mb-8 theme-text-simple">Contact</h1>

          {/* SNS パネルエリア */}
          <div className="grid grid-cols-2 gap-6">
            {contacts.map(({ name, icon, link, display }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-background transition p-5 rounded-lg flex items-center space-x-4"
              >
                <div className="theme-text">{icon}</div>
                <div>
                  <div className="text-lg font-semibold theme-text-simple hover:text-[#FF5500]">{name}</div>
                  <div className="text-sm text-zinc-500">{display}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
