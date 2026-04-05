import React from 'react'
import { Badge } from './badge'

export const CustomBabge = ({ children }: { children: React.ReactNode }) => {
  return (
    <Badge className='inline-flex items-center gap-2 rounded-full border border-[#EDE0D4] bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm'>
      {children}
    </Badge>
  )
}
