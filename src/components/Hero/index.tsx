import React from 'react'
import styles from './styles.module.scss'

import { Button } from '../Button'
import Link from 'next/link'
import Image from 'next/image'
import IconVideoPlayer from '../../../public/assets/Play.svg'
import { Paragraph } from '../Paragraph'

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
        <Paragraph>
          Prepare-se para uma experiência incrível e envolvente, onde a arte se
          une à performance para criar momentos inesquecíveis. Nossos shows
          artísticos são projetados para encantar, inspirar e transportar você
          para um mundo de criatividade e expressão.
        </Paragraph>
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
