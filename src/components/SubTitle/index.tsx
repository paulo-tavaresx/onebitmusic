import styles from './styles.module.scss'
import { ReactNode } from 'react'

type SubTitleProps = {
  children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return <h2 className={styles.container}>{children}</h2>
}
