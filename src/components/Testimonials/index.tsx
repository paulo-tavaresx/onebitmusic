import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { SubTitle } from '../SubTitle'
import { Paragraph } from '../Paragraph'
import { ArrowLeft, ArrowRight } from '../Arrows'
import { testimonialsData } from './testimonialsData'
import { testimonialDataType } from '@/types/testimonialDataType'
import Image from 'next/image'

type TestimonialsProps = {}

export const Testimonials = ({}: TestimonialsProps) => {
  const [testimonialsDataList, setTestimonialsDataList] =
    useState(testimonialsData)

  const changeToPrevOption = () => {
    setTestimonialsDataList(currentList => {
      const [firstItem, ...rest] = currentList
      return [...rest, firstItem]
    })
  }

  const changeToNextOption = () => {
    setTestimonialsDataList(currentList => {
      const restList = [...currentList]
      const lastItem = restList.pop() as testimonialDataType
      return [lastItem, ...restList]
    })
  }
  return (
    <section className={styles.container}>
      <SubTitle>Relatos</SubTitle>

      <div className={styles.testimonials}>
        <div className={styles.postCarrosselControl}>
          <ArrowLeft
            onClick={changeToPrevOption}
            className={`${styles.arrowLeft}`}
          />
          <ArrowRight
            onClick={changeToNextOption}
            className={`${styles.arrowRight}`}
          />
        </div>

        {testimonialsDataList &&
          testimonialsDataList
            .filter((_, index) => index < 3)
            .map(({ text, avatarSrc, city, name }, index, { length }) => (
              <div key={`testimonial-${index}`} className={styles.testimonial}>
                <div
                  className={`${styles.containerText} 

                  `}
                  onClick={() => {
                    index === length - 1 && changeToPrevOption()
                    index === 0 && changeToNextOption()
                  }}
                >
                  <Paragraph quotes={true}>{text}</Paragraph>
                </div>

                <div className={styles.user}>
                  <Image
                    width={120}
                    height={120}
                    src={`${avatarSrc}`}
                    alt={name}
                  />

                  <div className={styles.userText}>
                    <h3>{name}</h3>
                    <Paragraph>{city}</Paragraph>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  )
}
