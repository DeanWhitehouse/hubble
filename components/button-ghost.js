import Link from 'next/link';

export default function ButtonGhost({ href, children }) {
  const className = 'block text-center font-bold border border-hubble-mist bg-transparent leading-tight py-4 px-10 rounded-md bg-opacity-100 transition-colors hover:bg-white hover:text-hubble-brand';

  return (
    <Link href={href}>
      <a className={className}>
        { children }
      </a>
    </Link>
  )
}
