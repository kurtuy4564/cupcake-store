'use client'

import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const message = searchParams?.get('message') || 'Неизвестная ошибка'

  return <div className='text-center'>{message}</div>
}
