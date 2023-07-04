import styles from './styles.module.scss'
import { Logo } from '../Logo'
import Link from 'next/link'

import { Raleway } from 'next/font/google'

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from '../mediasIcons'

const raleway = Raleway({ subsets: ['latin'], weight: '400' })

type FooterProps = {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles.container}>
      <Logo />

      <div>
        <ul>
          <li>
            <Link href={'#'} aria-label="facebook">
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link href={'#'} aria-label="twitter">
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link href={'#'} aria-label="linkedin">
              <LinkedinIcon />
            </Link>
          </li>
          <li>
            <Link href={'#'} aria-label="instagram">
              <InstagramIcon />
            </Link>
          </li>
        </ul>
        <p className={raleway.className}>&copy; onebitcode.com, 2023 </p>
      </div>
    </footer>
  )
}
