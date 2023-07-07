import React from 'react'
import styles from './styles.module.scss'
import { Button } from '../Button'
import { SubTitle } from '../SubTitle'

type SponsorsProps = {}

export const Sponsors = ({}: SponsorsProps) => {
  return (
    <section className={styles.container}>
      <SubTitle>Nossos investidores</SubTitle>

      <div className={styles.logos}>
        <div className={styles.row}>
          <img src="assets/sponsors/img.png" />
          <img src="assets/sponsors/img2.png" />
          <img src="assets/sponsors/img3.png" />
          <img src="assets/sponsors/img4.png" />
        </div>
        <div className={styles.row}>
          <img src="assets/sponsors/img5.png" />

          <img src="assets/sponsors/img6.png" />

          <img src="assets/sponsors/img7.png" />

          <img src="assets/sponsors/img8.png" />
        </div>
      </div>

      <Button
        color="light"
        target="_blank"
        href={'https://www.linkedin.com/in/paulo-tavaresx/'}
      >
        Se torne um Investidor
      </Button>
    </section>
  )
}
