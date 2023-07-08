import styles from './styles.module.scss'
import { Logo } from '../Logo'
import { NavLink } from '../NavLink'
import { MouseEventHandler, useEffect, useState } from 'react'

type HeaderProps = {}

export const Header = ({}: HeaderProps) => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const HandleRemoveMenu: MouseEventHandler = () => {
    if (isOpenMenu) setIsOpenMenu(false)
  }

  useEffect(() => {
    const handleCheckScroll = () => {
      const scrollYPosition = document.documentElement.scrollTop
      setIsScrollOnTop(() => scrollYPosition > 0)
    }
    handleCheckScroll()

    window.addEventListener('scroll', handleCheckScroll)

    return () => {
      window.removeEventListener('scroll', handleCheckScroll)
    }
  })

  useEffect(() => {
    const handleCheckWindowSize = () => {
      if (window.innerWidth > 1050) {
        setIsOpenMenu(false)
      }
    }
    handleCheckWindowSize()

    window.addEventListener('resize', handleCheckWindowSize)

    return () => {
      window.removeEventListener('resize', handleCheckWindowSize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth > 1050) {
      document.body.classList.remove('noScroll')
    } else {
      if (isOpenMenu) {
        document.body.classList.add('noScroll')
      } else {
        document.body.classList.remove('noScroll')
      }
    }
  }, [isOpenMenu])

  return (
    <header
      className={`${styles.container} ${
        isScrollOnTop ? styles.activatedHeaderBg : ''
      }`}
    >
      <Logo />

      <div
        className={`${styles.iconMobile} ${isOpenMenu ? styles.MenuOpen : ''}`}
        onClick={() => setIsOpenMenu(prevState => !prevState)}
      >
        <div className={styles.line}></div>
      </div>
      <NavLink removeMenu={HandleRemoveMenu} isOpen={isOpenMenu} />
    </header>
  )
}
