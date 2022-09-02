import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="max-w-6xl px-4 md:px-0 mx-auto border-t border-hubble-mist/20 text-sm mt-16 py-16 text-center md:text-left md:flex items-center justify-between">
    {/* Design uses 16px line height (leading-4) however this isn't ideal for display as it's too tight, so ignored here even though line height is unlikely to be an influencer */}
      <nav>
        <ul className="flex gap-4 justify-evenly md:justify-start md:gap-10">
          <li>
            <Link href="/">
              <a className="hover:underline">
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:underline">
                Cookie Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:underline">
                Terms & Conditions
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <p className="text-hubble-mist/70 font-medium mt-4 md:mt-0">&copy; Hubble 2022 All right reserved</p>
    </footer>
  )
}
