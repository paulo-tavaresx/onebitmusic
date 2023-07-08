import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SubTitle } from '../SubTitle'
import { eventScheduleData, scheduleDaysData } from './eventScheduleData'
import IconVideoPlayer from '../../../public/assets/Play.svg'
import IconLive from '../../../public/assets/live.svg'
import IconClock from '../../../public/assets/clock.svg'
import { Paragraph } from '../Paragraph'
import Image from 'next/image'
import { PlayIcon } from '../Icons'

type EventScheduleProps = {}

export const EventSchedule = ({}: EventScheduleProps) => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <section id={'eventSchedule'} className={styles.container}>
      <SubTitle>Nossa programação</SubTitle>

      <div className={styles.tabsDays}>
        {scheduleDaysData.map(({ day, data }, index) => (
          <div
            key={`tab-Day-${index}`}
            className={`${styles.day} ${tabIndex === index && styles.active}`}
            onClick={() => {
              tabIndex !== index && setTabIndex(index)
            }}
          >
            <h3>{day}</h3>
            <time>{data}</time>
          </div>
        ))}
      </div>

      <div>
        <div className={styles.schedule}>
          <header>
            <SubTitle>Hora</SubTitle>
            <SubTitle>Conteúdo</SubTitle>
            <SubTitle>Artistas</SubTitle>
          </header>

          {eventScheduleData[tabIndex].map(
            ({ content, data, singers, state }, index) => (
              <div key={`list-${index}`} className={styles.list}>
                <time>{data}</time>
                <Paragraph>{content}</Paragraph>

                <div className={styles.singersAndStatesShows}>
                  <div className={styles.singers}>
                    {singers.map(({ both, avatarSrc, name }, singerIndex) => (
                      <div
                        key={`singers-${index}-${singerIndex}`}
                        className={styles.singer}
                      >
                        <Image
                          width={56}
                          height={56}
                          src={`${avatarSrc}`}
                          alt={`${name}-${index}`}
                        />
                        <div>
                          <h3>{name}</h3>
                          <p>
                            Both: <strong>{both}</strong>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h4 className={`${state === 'live' ? styles.redColor : ''}`}>
                    {state === 'preview' && (
                      <>
                        <>Previa</>
                        <PlayIcon />
                      </>
                    )}
                    {state === 'live' && (
                      <>
                        <>Ao Vivo</>
                        <Image src={IconLive} alt="open stream" />
                      </>
                    )}
                    {state === 'come soon' && (
                      <>
                        <>Em breve</>
                        <Image src={IconClock} alt="clock" />
                      </>
                    )}
                  </h4>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
