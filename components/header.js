import Banner from './banner'
import Branding from './branding'
import Link from 'next/link';
import Button from './button';

export default function Header() {
  const pageLinks = [
    {
      href: '/',
      title: 'Platform'
    },
    {
      href: '/',
      title: 'Solution'
    },
    {
      href: '/',
      title: 'Resources'
    },
    {
      href: '/',
      title: 'Company'
    },
  ]

  return (
    <header className="z-20">
      <Banner />
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between gap-8">
        <Link href="/">
          <a className="inline-block">
            <Branding className="h-auto w-[7.4rem]" />
            <span className="sr-only">Hubble logo, click here to return home</span>
          </a>
        </Link>

        <nav>
          <ul className="hidden md:flex items-center justify-center gap-12">
            {pageLinks.map((item, index) => 
              <li key={ index }>
                <Link href={item.href}>
                  {/* Additional padding to prevent flickering effect on hover */}
                  <a className="relative group py-1">
                    { item.title }
                    <div className="w-full h-0.5 bg-hubble-brand bottom-0 transition-transform transform scale-x-0 opacity-0 group-hover:opacity-100 group-hover:scale-x-100 duration-300" />
                  </a>
                </Link>
              </li>
             )}
          </ul>

          <button className="flex-col space-y-1.5 w-8 flex md:hidden">
            <span className="bg-white w-full h-0.5 rounded-lg" />
            <span className="bg-white w-full h-0.5 rounded-lg" />
            <span className="bg-white w-full h-0.5 rounded-lg" />
          </button>
        </nav>

        <div className="hidden md:block">
          <Button href="/">Get a demo</Button>
        </div>
      </nav>
    </header>
  )
}
