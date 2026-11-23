import { useState } from 'react'
import { flagEmoji, flagUrl } from '../../data/countries'
import { cx } from '../../utils/classNames'
import styles from './Flag.module.css'

interface FlagProps {
  code: string
  className?: string
}

export function Flag({ code, className }: FlagProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className={cx(styles.emoji, className)} aria-hidden="true">
        {flagEmoji(code)}
      </span>
    )
  }

  return (
    <img
      className={cx(styles.flag, className)}
      src={flagUrl(code)}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
