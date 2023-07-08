import React from 'react'
import styles from './styles.module.scss'
import { SubTitle } from '../SubTitle'
import { Paragraph } from '../Paragraph'
import { Button } from '../Button'

import singers1 from '../../../public/assets/singers/img.webp'
import singers2 from '../../../public/assets/singers/img2.webp'
import singers3 from '../../../public/assets/singers/img3.webp'
import singers4 from '../../../public/assets/singers/img4.webp'
import Image from 'next/image'

type SingersProps = {}

export const Singers = ({}: SingersProps) => {
  return (
    <section id={'singers'} className={styles.container}>
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

        <Button
          href={'https://github.com/paulo-tavaresx/onebitmusic'}
          target={'_blank'}
          color="light"
          arrowIcon={true}
        >
          Veja a lista completa
        </Button>
      </div>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image src={singers1} alt="singer1" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={singers2} alt="singer2" />
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image src={singers3} alt="singer3" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={singers4} alt="singer4" />
          </div>
        </div>
      </div>
    </section>
  )
}
