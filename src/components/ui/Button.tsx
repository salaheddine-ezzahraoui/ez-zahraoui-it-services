import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const base =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-azure text-white hover:bg-azure-dark',
  secondary: 'bg-white text-navy border border-gray-200 hover:bg-surface',
  outline: 'border border-white/30 text-white hover:bg-white/10',
}

export default function Button({
  children,
  to,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
