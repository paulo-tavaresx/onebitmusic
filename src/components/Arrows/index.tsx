import styles from './styles.module.scss'

type arrowProps = { className: string; onClick: () => void }

export const ArrowLeft = ({ className, onClick }: arrowProps) => {
  return (
    <svg
      onClick={onClick}
      className={`${styles.container} ${className}`}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons / Arrow">
        <path
          id="Vector"
          d="M15.5148 17.1557L22.4448 24.0857L20.4652 26.0653L11.5556 17.1557L20.4652 8.24609L22.4448 10.2257L15.5148 17.1557Z"
          fill="#222222"
        />
      </g>
    </svg>
  )
}

export const ArrowRight = ({ className, onClick }: arrowProps) => {
  return (
    <svg
      onClick={onClick}
      className={`${styles.container} ${className}`}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons / Arrow">
        <path
          id="Vector"
          d="M18.4862 17.1553L11.5562 10.2253L13.5358 8.24574L22.4454 17.1553L13.5358 26.0649L11.5562 24.0853L18.4862 17.1553Z"
          fill="#222222"
        />
      </g>
    </svg>
  )
}
