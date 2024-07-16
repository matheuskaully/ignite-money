import { ReactNode } from 'react'

interface PriceHighLightProps {
  children: ReactNode
  variant: 'income' | 'outcome'
}

export function PriceHighlight({ children, variant }: PriceHighLightProps) {
  if (variant === 'income') {
    return <span className="text-emerald-500">+ {children}</span>
  }

  if (variant === 'outcome') {
    return <span className="text-red-500">- {children}</span>
  }
}
