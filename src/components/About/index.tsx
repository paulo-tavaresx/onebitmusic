import { Button } from '../Button'
import styles from './styles.module.scss'
import Images from '../../../public/assets/shows-about.png'
import Image from 'next/image'
import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'

type AboutMusicProps = {}

export const AboutMusic = ({}: AboutMusicProps) => {
  return (
    <section id="about" className={styles.container}>
      <Image src={Images} alt="show images" />

      <div className={styles.content}>
        <div>
          <SubTitle>Sobre a gente</SubTitle>

          <Paragraph>
            Na onebitmusic, estamos redefinindo a maneira como experimentamos e
            nos envolvemos com a música, utilizando tecnologia de realidade
            virtual (VR) para criar shows e performances que transcendem os
            limites físicos e levam você a novos patamares de entretenimento
            musical.
          </Paragraph>
        </div>

        <Button
          color="light"
          href={'https://www.linkedin.com/in/paulo-tavaresx/'}
          target={'_blank'}
          arrowIcon={true}
        >
          Ler mais
        </Button>
      </div>
    </section>
  )
}
