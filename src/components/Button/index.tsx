import Link from 'next/link'
import styles from './styles.module.scss'
import { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  arrowIcon?: boolean
  noborder?: boolean
  target?: string
  onClick?: MouseEventHandler
  color?: 'dark' | 'light' | 'red' | 'redOutline'
}

export const Button = ({
  href,
  children,
  color = 'dark',
  arrowIcon = false,
  target,
  noborder = true,
  onClick
}: ButtonProps) => {
  return (
    <Link
      target={target}
      onClick={onClick}
      href={href}
      className={`${styles.container}  
    ${styles[color]} 
      ${noborder ? styles.noborder : ''}`}
    >
      {children}
      {arrowIcon && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1800_126)">
            <path
              d="M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
              fill="#222222"
            />
          </g>
          <defs>
            <clipPath id="clip0_1800_126">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </Link>
  )
}
