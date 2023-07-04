import styles from './styles.module.scss'
import Link from 'next/link'
import { NavLinkData } from '@/utils/navLinkData'

import { Montserrat } from 'next/font/google'
import { Button } from '../Button'
const montserrat = Montserrat({ weight: ['600', '700'], subsets: ['latin'] })

type NavLinkProps = {
  isOpen: boolean
}

export const NavLink = ({ isOpen }: NavLinkProps) => {
  return (
    <nav
      className={`${styles.container} ${montserrat.className} ${
        isOpen && styles.menuOpen
      }`}
    >
      <ul>
        {NavLinkData.map(({ text, href }) => (
          <li key={text}>
            <Link href={href} aria-label={text}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <Button noborder={true} color="light" href={'#pricing'}>
        COMPRAR INGRESSOS
      </Button>
    </nav>
  )
}
