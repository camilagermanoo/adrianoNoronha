import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'whatsapp'
type ButtonSize = 'md' | 'sm'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} {...props}>
      {children}
    </a>
  )
}
