import styles from './styles.module.scss'
import { Logo } from '../Logo'
import { NavLink } from '../NavLink'

type HeaderProps = {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.container}>
      <Logo />
      <NavLink isOpen={false} />
    </header>
  )
}
