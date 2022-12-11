import React from 'react'
import s from './Button.module.scss'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = ({ children, onClick }) => (
  <button type="button" className={s.button} onClick={onClick}>{children}</button>
)

export default Button
