import styles from './styles.module.scss'

import LikeEmpty from '../../../public/assets/LikeEmpty.svg'
import LikeFill from '../../../public/assets/LikeFill.svg'
import Image from 'next/image'
import { useState } from 'react'

type LikeDisplayProps = {
  currentCount: number
  isLike: boolean
  onClick: () => void
}

export const LikeDisplay = ({
  currentCount,
  isLike,
  onClick
}: LikeDisplayProps) => {
  return (
    <span className={`${styles.container}`}>
      <Image
        onClick={onClick}
        src={isLike ? LikeFill : LikeEmpty}
        alt={isLike ? 'like' : 'des like'}
      />
      <span>{currentCount + (isLike ? 1 : 0)}</span>
    </span>
  )
}
