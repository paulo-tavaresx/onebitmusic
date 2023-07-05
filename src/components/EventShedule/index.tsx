import React from 'react'
import styles from './styles.module.scss'

type EventSheduleProps = {}

export const EventShedule = ({}: EventSheduleProps) => {
  return (
    <div className="event-schedule">
      <div className="group">
        <div className="tabs">
          <div className="nossa-programa-o">Nossa programação</div>

          <div className="days">
            <div className="day">
              <div className="text">
                <div className="_2019">Dia 01</div>

                <div className="_2020">23 Setembro</div>
              </div>

              <div className="indicator"></div>
            </div>

            <div className="day">
              <div className="text">
                <div className="_20192">Dia 02</div>

                <div className="_20202">24 Setembro</div>
              </div>

              <div className="indicator2"></div>
            </div>

            <div className="day">
              <div className="text">
                <div className="_20192">Dia 03</div>

                <div className="_20202">25 Setembro</div>
              </div>

              <div className="indicator2"></div>
            </div>
          </div>
        </div>

        <div className="schedule">
          <div className="header">
            <div className="bg"></div>

            <div className="hora">Hora</div>

            <div className="conteudo">Conteudo</div>

            <div className="artistas">Artistas</div>
          </div>

          <div className="list">
            <div className="content">
              <div className="_11-00-am-to-12-00-pm">11:00 AM to 12:00 PM</div>

              <div className="desfrute-de-uma-performance-emocionante-com-yui-ronald-um-artista-solo-que-encanta-o-p-blico-com-sua-voz-cativante-e-letras-inspiradoras-prepare-se-para-uma-noite-de-m-sicas-envolventes-e-momentos-emocionantes">
                Desfrute de uma performance emocionante com Yui Ronald, um
                artista solo que encanta o público com sua voz cativante e
                letras inspiradoras. Prepare-se para uma noite de músicas
                envolventes e momentos emocionantes.
              </div>

              <div className="speakers">
                <div className="speaker">
                  <img className="avatar" src="avatar.png" />

                  <div className="name-booth">
                    <div className="yui-ronald">Yui Ronald</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="video">
              <div className="previa">Previa</div>

              <svg
                className="icons-play"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_893_283)">
                  <path
                    d="M12 21.9999C6.477 21.9999 2 17.5229 2 11.9999C2 6.47688 6.477 1.99988 12 1.99988C17.523 1.99988 22 6.47688 22 11.9999C22 17.5229 17.523 21.9999 12 21.9999ZM12 19.9999C14.1217 19.9999 16.1566 19.157 17.6569 17.6567C19.1571 16.1564 20 14.1216 20 11.9999C20 9.87815 19.1571 7.84331 17.6569 6.34302C16.1566 4.84273 14.1217 3.99988 12 3.99988C9.87827 3.99988 7.84344 4.84273 6.34315 6.34302C4.84285 7.84331 4 9.87815 4 11.9999C4 14.1216 4.84285 16.1564 6.34315 17.6567C7.84344 19.157 9.87827 19.9999 12 19.9999V19.9999ZM10.622 8.41488L15.501 11.6669C15.5559 11.7034 15.6009 11.7529 15.632 11.811C15.6631 11.8691 15.6794 11.934 15.6794 11.9999C15.6794 12.0658 15.6631 12.1307 15.632 12.1888C15.6009 12.2469 15.5559 12.2964 15.501 12.3329L10.621 15.5849C10.5608 15.6248 10.491 15.6476 10.4189 15.651C10.3468 15.6544 10.2751 15.6383 10.2114 15.6042C10.1477 15.5702 10.0945 15.5196 10.0573 15.4577C10.02 15.3958 10.0003 15.3251 10 15.2529V8.74688C10.0001 8.67453 10.0199 8.60357 10.0572 8.54156C10.0944 8.47955 10.1478 8.42881 10.2116 8.39474C10.2755 8.36067 10.3473 8.34455 10.4196 8.3481C10.4919 8.35165 10.5618 8.37472 10.622 8.41488V8.41488Z"
                    fill="#F9F9F9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_893_283">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="divider"></div>

          <div className="list">
            <div className="content">
              <div className="_12-00-pm-to-03-00-pm">12:00 PM to 03:00 PM</div>

              <div className="o-trio-que-vai-levar-voc-a-uma-jornada-musical-com-suas-harmonias-vocais-encantadoras-e-arranjos-instrumentais-cativantes-prepare-se-para-desfrutar-de-um-repert-rio-diversificado-que-abrange-diversos-estilos-musicais-e-emocione-seus-sentidos">
                O trio que vai levar você a uma jornada musical com suas
                harmonias vocais encantadoras e arranjos instrumentais
                cativantes. Prepare-se para desfrutar de um repertório
                diversificado que abrange diversos estilos musicais e emocione
                seus sentidos.
              </div>

              <div className="speakers">
                <div className="speaker">
                  <img className="avatar" src="avatar.png" />

                  <div className="name-booth">
                    <div className="bob-john">Bob John</div>
                  </div>
                </div>

                <div className="speaker">
                  <img className="avatar" src="avatar.png" />

                  <div className="name-booth">
                    <div className="yui-ronald">Yui Ronald</div>
                  </div>
                </div>

                <div className="speaker">
                  <img className="avatar" src="avatar.png" />

                  <div className="name-booth">
                    <div className="emma-satoshi">Emma Satoshi</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="video">
              <div className="ao-vivo">AO VIVO</div>

              <svg
                className="icons-live-camera"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_893_307)">
                  <path
                    d="M16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V9.2L22.213 5.55C22.288 5.49746 22.3759 5.4665 22.4672 5.4605C22.5586 5.4545 22.6498 5.4737 22.731 5.51599C22.8122 5.55829 22.8802 5.62206 22.9276 5.70035C22.9751 5.77865 23.0001 5.86846 23 5.96V18.04C23.0001 18.1315 22.9751 18.2214 22.9276 18.2996C22.8802 18.3779 22.8122 18.4417 22.731 18.484C22.6498 18.5263 22.5586 18.5455 22.4672 18.5395C22.3759 18.5335 22.288 18.5025 22.213 18.45L17 14.8V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H2C1.73478 20 1.48043 19.8946 1.29289 19.7071C1.10536 19.5196 1 19.2652 1 19V5C1 4.73478 1.10536 4.48043 1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H16ZM15 6H3V18H15V6ZM7.4 8.829C7.47611 8.82879 7.55069 8.8503 7.615 8.891L11.97 11.663C12.0266 11.6992 12.0731 11.749 12.1054 11.8079C12.1376 11.8668 12.1545 11.9329 12.1545 12C12.1545 12.0671 12.1376 12.1332 12.1054 12.1921C12.0731 12.251 12.0266 12.3008 11.97 12.337L7.615 15.11C7.55434 15.1487 7.48438 15.1703 7.41248 15.1725C7.34059 15.1748 7.26941 15.1576 7.20646 15.1228C7.14351 15.088 7.0911 15.0368 7.05477 14.9747C7.01843 14.9127 6.99951 14.8419 7 14.77V9.23C7 9.009 7.18 8.83 7.4 8.83V8.829ZM21 8.84L17 11.64V12.358L21 15.158V8.84Z"
                    fill="#F64348"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_893_307">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="divider"></div>

          <div className="list">
            <div className="content">
              <div className="_03-00-pm-to-04-00-pm">03:00 PM to 04:00 PM</div>

              <div className="a-dupla-que-vai-conquistar-seu-cora-o-com-sua-m-sica-cativante-e-performances-cheias-de-energia-com-sua-sintonia-perfeita-e-talento-extraordin-rio-eles-criar-o-um-ambiente-envolvente-e-contagiar-o-o-p-blico-com-seu-estilo-musical-nico">
                A dupla que vai conquistar seu coração com sua música cativante
                e performances cheias de energia. Com sua sintonia perfeita e
                talento extraordinário, eles criarão um ambiente envolvente e
                contagiarão o público com seu estilo musical único.
              </div>

              <div className="speakers">
                <div className="speaker">
                  <img className="avatar" src="avatar.png" />

                  <div className="name-booth">
                    <div className="sasha-jackson">Sasha Jackson</div>
                  </div>
                </div>

                <div className="speaker">
                  <img className="avatar" src="avatar.png" />

                  <div className="name-booth">
                    <div className="diana-brock">Diana Brock</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="video">
              <div className="em-breve">Em breve</div>

              <svg
                className="icons-clock"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_893_326)">
                  <path
                    d="M12 22.0001C6.477 22.0001 2 17.5231 2 12.0001C2 6.47712 6.477 2.00012 12 2.00012C17.523 2.00012 22 6.47712 22 12.0001C22 17.5231 17.523 22.0001 12 22.0001ZM12 20.0001C14.1217 20.0001 16.1566 19.1573 17.6569 17.657C19.1571 16.1567 20 14.1219 20 12.0001C20 9.87839 19.1571 7.84356 17.6569 6.34327C16.1566 4.84298 14.1217 4.00012 12 4.00012C9.87827 4.00012 7.84344 4.84298 6.34315 6.34327C4.84285 7.84356 4 9.87839 4 12.0001C4 14.1219 4.84285 16.1567 6.34315 17.657C7.84344 19.1573 9.87827 20.0001 12 20.0001V20.0001ZM13 12.0001H17V14.0001H11V7.00012H13V12.0001Z"
                    fill="#F9F9F9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_893_326">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
