import { ReactNode } from 'react'
import styles from './styles.module.scss'

import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weight: '400' })

type ParagraphProps = {
  children: ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className={`${styles.container} ${raleway.className}`}>{children}</p>
  )
}
