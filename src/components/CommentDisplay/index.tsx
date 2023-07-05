import styles from './styles.module.scss'

import Chat from '../../../public/assets/chat.svg'

import Image from 'next/image'

type CommentDisplayProps = {
  currentCount: number
}

export const CommentDisplay = ({ currentCount }: CommentDisplayProps) => {
  return (
    <span className={`${styles.container}`}>
      <Image src={Chat} alt={'comment'} />
      <span>{currentCount}</span>
    </span>
  )
}
