import React from 'react'
import styles from './styles.module.scss'
import { Button } from '../Button'
import { SubTitle } from '../SubTitle'
import Image from 'next/image'

type SponsorsProps = {}

export const Sponsors = ({}: SponsorsProps) => {
  return (
    <section className={styles.container}>
      <SubTitle>Nossos investidores</SubTitle>

      <div className={styles.logos}>
        <div className={styles.row}>
          <Image
            width={170}
            height={56}
            src="/assets/sponsors/img.png"
            alt="google"
          />
          <Image
            width={170}
            height={38}
            src="/assets/sponsors/img2.png"
            alt="microsoft"
          />
          <Image
            width={170}
            height={54}
            src="/assets/sponsors/img3.png"
            alt="airbnb"
          />
          <Image
            width={170}
            height={50}
            src="/assets/sponsors/img4.png"
            alt="axure"
          />
        </div>
        <div className={styles.row}>
          <Image
            width={170}
            height={59}
            src="/assets/sponsors/img5.png"
            alt="apple"
          />

          <Image
            width={170}
            height={35}
            src="/assets/sponsors/img6.png"
            alt="facebook"
          />

          <Image
            width={170}
            height={30}
            src="/assets/sponsors/img7.png"
            alt="nokia"
          />

          <Image
            width={170}
            height={23}
            src="/assets/sponsors/img8.png"
            alt="oracle"
          />
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
