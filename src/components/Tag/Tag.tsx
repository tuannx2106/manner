import React from 'react'
import classNames from 'classnames';
import s from './Tag.module.scss'

type Props = {
  text: string;
  onClick?: () => void
}

const Tag = ({ text, onClick }: Props) => (
  <span
    role="presentation"
    onClick={onClick}
    className={classNames({
      [s.tag]: true,
      [s.clickable]: !!onClick,
    })}
  >
    {text}
  </span>
)

export default Tag
