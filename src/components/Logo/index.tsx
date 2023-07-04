import styles from './styles.module.scss'
import Image from 'next/image'

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })

import logoIcon from '../../../public/assets/logoIcon.svg'

type LogoProps = {}

export const Logo = ({}: LogoProps) => {
  return (
    <span className={`${styles.container} ${poppins.className}`}>
      <h3>
        onebit<span>music</span>
      </h3>
      <Image src={logoIcon} alt="onebitmusic logo" />
    </span>
  )
}
