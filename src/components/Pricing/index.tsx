import React from 'react'
import styles from './styles.module.scss'

type HeaderProps = {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className="pricing">
      <div className="indicator"></div>

      <div className="content">
        <div className="title">
          <div className="basic">Basico</div>

          <div className="_100">R$100</div>
        </div>

        <div className="content2">
          <div className="_1-seat-available">Acesso aos shows digitais</div>

          <div className="access-to-wifi-router">
            Experiência musical imersiva
          </div>

          <div className="free-food-coffee">Preço acessível</div>
        </div>

        <div className="buttons">
          <div className="button">Saber mais</div>
        </div>
      </div>
    </div>
  )
}
