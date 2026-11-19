import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, type To } from 'react-router'
import { cx } from '../../utils/classNames'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'whatsapp'
type ButtonSize = 'md' | 'sm'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  to?: To
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  to,
  children,
  ...props
}: ButtonProps) {
  const classes = cx(styles.button, styles[variant], styles[size], className)

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
