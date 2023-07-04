import React from 'react'
import styles from './styles.module.scss'

type ArrowProps = {}

export const Header = ({}: ArrowProps) => {
  return <div className={styles.container}>{'>'}</div>
}
