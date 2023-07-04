import Link from 'next/link'
import styles from './styles.module.scss'
import { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  arrowIcon?: boolean
  noborder?: boolean
  color?: 'dark' | 'light' | 'red' | 'redOutline'
}

export const Button = ({
  href,
  children,
  color = 'dark',
  arrowIcon = false,
  noborder = true
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${styles.container}  
      ${color === 'light' && styles.lightColor} 
      ${color === 'red' && styles.redColor} 
      ${color === 'redOutline' && styles.redOutline}
      ${noborder && styles.noborder}`}
    >
      {children}
      {arrowIcon && arrowIcon}
    </Link>
  )
}
