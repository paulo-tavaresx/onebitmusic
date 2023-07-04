import React from 'react'
import styles from './styles.module.scss'

type HeaderProps = {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className="singers">
      <div className="images">
        <img className="img" src="img.png" />

        <img className="img2" src="img2.png" />

        <img className="img3" src="img3.png" />

        <img className="img4" src="img4.png" />

        <img className="img5" src="img5.png" />

        <img className="img6" src="img6.png" />

        <img className="img7" src="img7.png" />

        <img className="img8" src="img8.png" />
      </div>

      <div className="content">
        <div className="text">
          <div className="artistas">Artistas</div>

          <div className="no-evento-da-one-bit-music-voc-ter-a-oportunidade-de-desfrutar-de-uma-incr-vel-variedade-de-artistas-talentosos-nossa-sele-o-musical-abrange-diferentes-g-neros-e-estilos-garantindo-uma-experi-ncia-musical-diversificada-e-emocionante-de-d-js-renomados-a-bandas-cativantes-cada-artista-traz-sua-paix-o-e-habilidade-para-criar-performances-envolventes-prepare-se-para-se-surpreender-com-m-sicas-cativantes-ritmos-vibrantes-e-momentos-emocionantes-durante-todo-o-evento-os-artistas-da-one-bit-music-est-o-prontos-para-levar-voc-a-uma-jornada-musical-nica-e-inesquec-vel">
            No evento da OneBitMusic, você terá a oportunidade de desfrutar de
            uma incrível variedade de artistas talentosos. Nossa seleção musical
            abrange diferentes gêneros e estilos, garantindo uma experiência
            musical diversificada e emocionante. De DJs renomados a bandas
            cativantes, cada artista traz sua paixão e habilidade para criar
            performances envolventes. Prepare-se para se surpreender com músicas
            cativantes, ritmos vibrantes e momentos emocionantes durante todo o
            evento. Os artistas da OneBitMusic estão prontos para levar você a
            uma jornada musical única e inesquecível.
          </div>
        </div>

        <div className="buttons">
          <div className="button">Veja a lista completa</div>

          <svg
            className="icons-arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1821_130)">
              <path
                d="M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                fill="#222222"
              />
            </g>
            <defs>
              <clipPath id="clip0_1821_130">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
