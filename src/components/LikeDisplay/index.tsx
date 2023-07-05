import styles from './styles.module.scss'

import LikeEmpty from '../../../public/assets/LikeEmpty.svg'
import LikeFill from '../../../public/assets/LikeFill.svg'
import Image from 'next/image'
import { useState } from 'react'

type LikeDisplayProps = {
  currentCount: number
  isLike: boolean
}

export const LikeDisplay = ({ currentCount, isLike }: LikeDisplayProps) => {
  const [isLiked, setIsLiked] = useState(isLike)
  return (
    <span className={`${styles.container}`}>
      <Image
        onClick={() => setIsLiked(!isLiked)}
        src={isLiked ? LikeFill : LikeEmpty}
        alt={isLiked ? 'like' : 'deslike'}
      />
      <span>{currentCount + (isLiked ? 1 : 0)}</span>
    </span>
  )
}
