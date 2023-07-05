import React from 'react'
import styles from './styles.module.scss'
import { SubTitle } from '../SubTitle'
import { Paragraph } from '../Paragraph'
import { Button } from '../Button'

type SingersProps = {}

export const Singers = ({}: SingersProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div>
          <SubTitle>Artistas</SubTitle>
          <Paragraph>
            No evento da OneBitMusic, você terá a oportunidade de desfrutar de
            uma incrível variedade de artistas talentosos. Nossa seleção musical
            abrange diferentes gêneros e estilos, garantindo uma experiência
            musical diversificada e emocionante. De DJs renomados a bandas
            cativantes, cada artista traz sua paixão e habilidade para criar
            performances envolventes. Prepare-se para se surpreender com músicas
            cativantes, ritmos vibrantes e momentos emocionantes durante todo o
            evento. Os artistas da OneBitMusic estão prontos para levar você a
            uma jornada musical única e inesquecível.
          </Paragraph>
        </div>

        <Button href={'#'} color="light" arrowIcon={true}>
          Veja a lista completa
        </Button>
      </div>
      <div className={styles.images}></div>
    </section>
  )
}
