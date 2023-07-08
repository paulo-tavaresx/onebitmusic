import React from 'react'
import styles from './styles.module.scss'
import { SubTitle } from '../SubTitle'
import { pricingCardData } from '@/components/Pricing/pricingCardData'
import { Button } from '../Button'

import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weight: '400' })

type PricingProps = {}

export const Pricing = ({}: PricingProps) => {
  return (
    <section id="pricing" className={styles.container}>
      <SubTitle>Escolha o tipo de ingresso</SubTitle>

      <div className={styles.cards}>
        {pricingCardData.map(
          ({ name, price, themeColor, benefits, buttonConfigs }) => (
            <div
              className={`${styles.card}  ${styles[themeColor]}`}
              key={`card-${name}`}
            >
              <div className={styles.content}>
                <h3>{name}</h3>
                <h1>{`R$${price}`}</h1>
              </div>

              <ul>
                {benefits.map((text, index) => (
                  <li
                    className={raleway.className}
                    key={`benefits-${index}-${text}`}
                  >
                    {text}
                  </li>
                ))}
              </ul>
              <Button
                target={'_blank'}
                href={buttonConfigs.href}
                noborder={buttonConfigs.noborder}
                color={
                  name === 'VIP'
                    ? 'redOutline'
                    : name === 'Básico'
                    ? 'light'
                    : 'dark'
                }
              >
                {buttonConfigs.text}
              </Button>
            </div>
          )
        )}
      </div>
    </section>
  )
}
