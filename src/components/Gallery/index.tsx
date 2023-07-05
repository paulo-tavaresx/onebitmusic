import { galleryData } from '@/components/Gallery/galleryData'
import { CommentDisplay } from '../CommentDisplay'
import { LikeDisplay } from '../LikeDisplay'
import { Paragraph } from '../Paragraph'
import { SubTitle } from '../SubTitle'
import styles from './styles.module.scss'

import { Raleway } from 'next/font/google'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from '../Arrows'
import { galleryDataType } from '@/types/galleryCardType'
const raleway = Raleway({ subsets: ['latin'], weight: '400' })

type GalleryProps = {}

export const Gallery = ({}: GalleryProps) => {
  const [galleryDataList, setGalleryDataList] = useState(galleryData)

  const changeToPrevOption = () => {
    setGalleryDataList(currentList => {
      const [firstItem, ...rest] = currentList
      return [...rest, firstItem]
    })
  }

  const changeToNextOption = () => {
    setGalleryDataList(currentList => {
      const restList = [...currentList]
      const lastItem = restList.pop() as galleryDataType
      return [lastItem, ...restList]
    })
  }

  return (
    <section className={styles.container}>
      <svg
        className={styles.iconinstagram}
        width="361"
        height="361"
        viewBox="0 0 361 361"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M180.5 0.916748C229.293 0.916748 235.381 1.09633 254.524 1.99425C273.65 2.89216 286.67 5.89121 298.127 10.3449C309.98 14.9063 319.965 21.084 329.949 31.0508C339.081 40.0281 346.147 50.8874 350.655 62.873C355.091 74.3125 358.108 87.3502 359.006 106.476C359.85 125.619 360.083 131.707 360.083 180.5C360.083 229.293 359.904 235.381 359.006 254.524C358.108 273.65 355.091 286.67 350.655 298.127C346.16 310.119 339.092 320.981 329.949 329.949C320.969 339.078 310.111 346.143 298.127 350.655C286.688 355.091 273.65 358.108 254.524 359.006C235.381 359.85 229.293 360.083 180.5 360.083C131.707 360.083 125.619 359.904 106.476 359.006C87.3502 358.108 74.3304 355.091 62.873 350.655C50.8827 346.156 40.0215 339.089 31.0508 329.949C21.9173 320.974 14.8512 310.114 10.3449 298.127C5.89121 286.688 2.89216 273.65 1.99425 254.524C1.15021 235.381 0.916748 229.293 0.916748 180.5C0.916748 131.707 1.09633 125.619 1.99425 106.476C2.89216 87.3322 5.89121 74.3304 10.3449 62.873C14.8387 50.8801 21.9065 40.0178 31.0508 31.0508C40.0241 21.9142 50.8845 14.8476 62.873 10.3449C74.3304 5.89121 87.3322 2.89216 106.476 1.99425C125.619 1.15021 131.707 0.916748 180.5 0.916748ZM180.5 90.7084C156.686 90.7084 133.847 100.169 117.008 117.008C100.169 133.847 90.7084 156.686 90.7084 180.5C90.7084 204.314 100.169 227.153 117.008 243.992C133.847 260.832 156.686 270.292 180.5 270.292C204.314 270.292 227.153 260.832 243.992 243.992C260.832 227.153 270.292 204.314 270.292 180.5C270.292 156.686 260.832 133.847 243.992 117.008C227.153 100.169 204.314 90.7084 180.5 90.7084V90.7084ZM297.229 86.2188C297.229 80.2653 294.864 74.5556 290.654 70.3458C286.445 66.136 280.735 63.7709 274.781 63.7709C268.828 63.7709 263.118 66.136 258.908 70.3458C254.698 74.5556 252.333 80.2653 252.333 86.2188C252.333 92.1724 254.698 97.8821 258.908 102.092C263.118 106.302 268.828 108.667 274.781 108.667C280.735 108.667 286.445 106.302 290.654 102.092C294.864 97.8821 297.229 92.1724 297.229 86.2188ZM180.5 126.625C194.789 126.625 208.492 132.301 218.595 142.405C228.699 152.508 234.375 166.212 234.375 180.5C234.375 194.789 228.699 208.492 218.595 218.595C208.492 228.699 194.789 234.375 180.5 234.375C166.212 234.375 152.508 228.699 142.405 218.595C132.301 208.492 126.625 194.789 126.625 180.5C126.625 166.212 132.301 152.508 142.405 142.405C152.508 132.301 166.212 126.625 180.5 126.625V126.625Z"
          fill="#F64348"
        />
      </svg>

      <SubTitle>Galeria de Momentos Compartilhados</SubTitle>

      <div className={styles.media}>
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

        {galleryDataList.map(
          ({ comments, likes, src, title, description }, index, array) => (
            <figure key={`card-gallery-${index}`} className={styles.instashot}>
              <img src={src} />

              <div className={styles.titleTags}>
                <div className={styles.likesComments}>
                  <LikeDisplay isLike={true} currentCount={likes} />
                  <CommentDisplay currentCount={comments} />
                </div>

                <figcaption className={raleway.className}>{title}</figcaption>
                <Paragraph>{description}</Paragraph>
              </div>
            </figure>
          )
        )}
      </div>
    </section>
  )
}
