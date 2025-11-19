import { useEffect, useState } from 'react'
import { DotGrid } from '../components/DotGrid'

const contacts = [
  {
    type: 'banner',
    url: 'https://t3tra.dev/',
    imgSrc: {
      light: 'https://t3tra.dev/images/banner.png',
      dark: 'https://t3tra.dev/images/banner_dark.png',
    },
    alt: 'banner-t3tra',
  },
  {
    type: 'banner',
    url: 'https://371tti.net/',
    imgSrc: {
      light: 'https://371tti.net/banner.png',
      dark: 'https://371tti.net/banner.png',
    },
    alt: 'banner-371tti',
  },
  {
    type: 'banner',
    url: 'https://akku1139.github.io/',
    imgSrc: {
      light: 'https://akku1139.github.io/banners/320x100.png',
      dark: 'https://akku1139.github.io/banners/320x100.png',
    },
    alt: 'banner-akku',
  },
  {
    type: 'banner',
    url: 'https://takoserver.com/',
    imgSrc: {
      light: 'https://info.takos.jp/banner_red.png',
      dark: 'https://info.takos.jp/banner_red.png',
    },
    alt: 'banner-takoserver',
  },
  {
    type: 'banner',
    url: 'https://kzng.f5.si/',
    imgSrc: {
      light: '/NagiBanner.webp',
      dark: '/NagiBanner.webp',
    },
    alt: 'banner-newline-crlf',
  },
  {
    type: 'banner',
    url: 'https://profile.activetk.jp/',
    imgSrc: {
      light: '',
      dark: '',
    },
    alt: 'banner-activetk.',
  },
  {
    type: 'banner',
    url: 'https://main.skikozou.me/',
    imgSrc: {
      light: 'https://main.skikozou.me/banner.png',
      dark: 'https://main.skikozou.me/banner.png',
    },
    alt: 'banner-sizu',
  },
]

/*
Option

  {
    type: 'banner',
    url: 'https://main.skikozou.me/',
    imgSrc: {
      light: 'https://main.skikozou.me/banner.png',
      dark: 'https://main.skikozou.me/banner.png',
    },
    alt: 'banner-sizu',
  },
*/

export default function Link() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark') {
      root.classList.add('dark')
      setIsDark(true)
    } else {
      root.classList.remove('dark')
      setIsDark(false)
    }

    const themeChangeListener = () => {
      const isDarkMode = root.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChangeListener)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeChangeListener)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-50">
		  <DotGrid />
	
		  <div className="relative z-10 flex justify-center items-center min-h-screen">
			<div className="theme-bg-simple rounded-lg p-8 max-w-3xl w-full relative">
			  <div className="absolute inset-0 theme-bg-shadow rounded-lg -z-10 translate-x-[var(--shadow-location)] translate-y-[var(--shadow-location)]" />
	
			  <h1 className="text-3xl font-bold text-center mb-8 theme-text-simple">Link Exchange</h1>
	
			  {/* SNS パネルエリア */}
			  <div className="grid grid-cols-2 grid-rows-2 gap-6">
          {contacts.map(({ url, imgSrc, alt }, i) => (
            <a
              key={url}
              href={url}
              className={`theme-background transition rounded-lg flex items-center justify-center relative overflow-hidden
               ${i === contacts.length - 1 ? "justify-self-center col-span-2" : ""}
              `}
            >
             <img
               src={isDark ? imgSrc.dark : imgSrc.light}
                alt={alt}
                className="w-full h-full object-contain transition-all"
              />
            </a>
          ))}
        </div>
			</div>
		  </div>
		</div>
  )
}
