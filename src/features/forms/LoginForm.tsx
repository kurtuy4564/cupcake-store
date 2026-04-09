'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useState } from 'react'
import { FormDataLogin } from '@/entities/user/types/type'
import { singInWithCredentials } from '@/entities/user/actions/sing-in'

export const LoginForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataLogin>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string>('')

  const isPasswordValid = formData.password.length >= 8 && formData.password.length <= 32
  const isFormValid = formData.email && isPasswordValid

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!isFormValid) {
      setError('Пароль должен быть от 8 до 32 символов')
      return
    }

    const result = await singInWithCredentials(formData)
    
    console.log(result)
    
    if (result?.ok) {
      router.push('/')
      return
    }

    setError('Неверный email или пароль')
  }

  return (
    <div className='flex items-center justify-center bg-cream'>
      <Card className='w-full max-w-sm shadow-lg'>
        <CardHeader>
          <CardTitle className='font-display text-2xl text-primary'>Войти в аккаунт</CardTitle>
          <CardDescription className='text-black'>
            Введите ваш email для входа в аккаунт
          </CardDescription>
          {error && <div className='mt-2 text-sm text-red-600'>{error}</div>}
          <CardAction>
            <Button variant='link' className='text-blush hover:text-blush/80' asChild>
              <a href='/register'>Регистрация</a>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} id='form-sing-in'>
            <div className='flex flex-col gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email' className='text-primary'>
                  Email
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className='border-sand focus:border-mint'
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password' className='text-primary'>
                    Пароль
                  </Label>
                  <a
                    href='#'
                    className='text-sm text-muted underline-offset-4 hover:underline hover:text-mint'>
                    Забыли пароль?
                  </a>
                </div>
                <Input
                  id='password'
                  type='password'
                  required
                  minLength={8}
                  maxLength={32}
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className='border-sand focus:border-mint'
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-3'>
          <Button
            form='form-sing-in'
            variant='outline'
            type='submit'
            disabled={!isFormValid}
            className='w-full bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed'>
            Войти
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
