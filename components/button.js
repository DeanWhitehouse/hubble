import Link from 'next/link';

export default function Button({ href, children }) {
  const className = 'block text-center font-bold bg-hubble-brand leading-tight py-4 px-10 rounded-md bg-opacity-100 transition-colors hover:bg-opacity-50';

  return (
    <Link href={href}>
      <a className={className}>
        { children }
      </a>
    </Link>
  )
}
