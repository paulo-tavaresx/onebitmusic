import styles from './styles.module.scss'
import Link from 'next/link'
import { NavLinkData } from '@/components/NavLink/navLinkData'

import { Montserrat } from 'next/font/google'
import { Button } from '../Button'
import { MouseEventHandler } from 'react'
const montserrat = Montserrat({ weight: ['600', '700'], subsets: ['latin'] })

type NavLinkProps = {
  isOpen: boolean
  removeMenu: MouseEventHandler
}

export const NavLink = ({ isOpen, removeMenu }: NavLinkProps) => {
  return (
    <nav
      className={`${styles.container} ${montserrat.className} ${
        isOpen ? styles.menuOpen : ''
      }`}
    >
      <ul>
        {NavLinkData.map(({ text, href }) => (
          <li key={text}>
            <Link href={href} onClick={removeMenu} aria-label={text}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        noborder={true}
        onClick={removeMenu}
        color="light"
        href={'#pricing'}
      >
        COMPRAR INGRESSOS
      </Button>
    </nav>
  )
}
