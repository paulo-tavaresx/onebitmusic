import { Button } from '../Button'
import styles from './styles.module.scss'
import Images from '../../../public/assets/shows-about.png'
import Image from 'next/image'
import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'

type AboutMusicProps = {}

export const AboutMusic = ({}: AboutMusicProps) => {
  return (
    <section className={styles.container}>
      <Image src={Images} alt="show images" />

      <div className={styles.content}>
        <SubTitle>Sobre a gente</SubTitle>

        <Paragraph>
          Na onebitmusic, estamos redefinindo a maneira como experimentamos e
          nos envolvemos com a música, utilizando tecnologia de realidade
          virtual (VR) para criar shows e performances que transcendem os
          limites físicos e levam você a novos patamares de entretenimento
          musical.
        </Paragraph>

        <Button color="light" href="#" arrowIcon={true}>
          Ler mais
        </Button>
      </div>
    </section>
  )
}
