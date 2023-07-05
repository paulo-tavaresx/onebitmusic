import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SubTitle } from '../SubTitle'
import { Paragraph } from '../Paragraph'
import { ArrowLeft, ArrowRight } from '../Arrows'
import { testimonialsData } from './testimonialsData'
import { testimonialDataType } from '@/types/testimonialDataType'

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
        <div className={styles.postCarroselControl}>
          <ArrowLeft
            onClick={changeToPrevOption}
            className={`${styles.arrowLeft}`}
          />
          <ArrowRight
            onClick={changeToNextOption}
            className={`${styles.arrowRight}`}
          />
        </div>

        {testimonialsDataList.map(
          ({ text, avatarSrc, city, name }, index, { length }) => (
            <div className={styles.testimonial}>
              <div
                className={`${styles.containerText} 
                ${index === length - 1 && styles.cursorPoint} 
                ${index === 1 && styles.cursorPoint}
                  `}
                onClick={() => {
                  index === length - 1 && changeToPrevOption()
                  index === 1 && changeToNextOption()
                }}
              >
                <Paragraph quotes={true}>{text}</Paragraph>
              </div>

              <div className={styles.user}>
                <img src={avatarSrc} />

                <div className={styles.userText}>
                  <h3>{name}</h3>
                  <Paragraph>{city}</Paragraph>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
