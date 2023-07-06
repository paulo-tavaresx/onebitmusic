import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weight: '400' })

type TextInputProps = {
  label: string
  type?: string
  placeholder?: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const TextInput = ({
  label,
  type,
  placeholder,
  value,
  setValue
}: TextInputProps) => {
  return (
    <span className={`${styles.container} ${raleway.className}`}>
      <input
        id={label}
        type={type ?? 'text'}
        value={value}
        placeholder={placeholder ?? ''}
        onChange={e => setValue(e.target.value)}
      />
      <label htmlFor={label}>{label}</label>
    </span>
  )
}
