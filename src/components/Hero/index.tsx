import React from 'react'
import styles from './styles.module.scss'

import { Raleway } from 'next/font/google'
import { Button } from '../Button'
import Link from 'next/link'
import Image from 'next/image'
import IconVideoPlayer from '../../../public/assets/Play.svg'

const raleway = Raleway({ subsets: ['latin'], weight: '400' })

type HeroProps = {
  id: string
}

export const Hero = ({ id }: HeroProps) => {
  return (
    <section id={id} className={styles.container}>
      <div className={styles.content}>
        <h1>
          A sua melhor Experiencia
          <span>musical Digital</span>
        </h1>
        <p className={raleway.className}>
          Prepare-se para uma experiência incrível e envolvente, onde a arte se
          une à performance para criar momentos inesquecíveis. Nossos shows
          artísticos são projetados para encantar, inspirar e transportar você
          para um mundo de criatividade e expressão.
        </p>
        <span>
          <Button color="red" href={'#'}>
            Começar
          </Button>

          <Link className={styles.videoButton} href="#">
            <Image src={IconVideoPlayer} alt="open video" />
            Assistir Video
          </Link>
        </span>
      </div>

      <time>5d 2h 26m 12s</time>
    </section>
  )
}
