'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useInterval } from '../../hooks/useInterval'
import { Button } from '../Button'
import Link from 'next/link'
import Image from 'next/image'
import IconVideoPlayer from '../../../public/assets/Play.svg'
import { Paragraph } from '../Paragraph'
import { calcDIferenceDate } from '@/utils/calcDIferenceDate'

type HeroProps = {
  id: string
}

type timeType = {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

export const Hero = ({ id }: HeroProps) => {
  const [eventData] = useState(new Date('2023-07-26'))
  const [remainTime, setRemainTime] = useState<timeType | null>(null)
  const handleChangeTime = () => {
    setRemainTime(calcDIferenceDate(eventData))
  }
  useInterval(handleChangeTime, 1000)

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
          <Button
            color="red"
            target="_blank"
            href={'https://www.linkedin.com/in/paulo-tavaresx/'}
          >
            Começar
          </Button>

          <Link
            className={styles.videoButton}
            target="_blank"
            href="https://www.linkedin.com/in/paulo-tavaresx/"
          >
            <Image src={IconVideoPlayer} alt="open video" />
            Assistir Video
          </Link>
        </span>
      </div>

      <time>
        {remainTime && (
          <>
            <span>{remainTime.dias}d</span>
            <span>{remainTime.horas}h</span>
            <span>{remainTime.minutos}m</span>
            <span>{remainTime.segundos}s</span>
          </>
        )}
      </time>
    </section>
  )
}
