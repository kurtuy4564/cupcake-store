import React from 'react'
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

export const LoginForm = () => {
  const [formData, setFormData] = useState<FormDataLogin>({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Login:', formData)
  }

  return (
    <div className='flex items-center justify-center bg-cream'>
      <Card className='w-full max-w-sm shadow-lg'>
        <CardHeader>
          <CardTitle className='font-display text-2xl text-primary'>Войти в аккаунт</CardTitle>
          <CardDescription className='text-black'>
            Введите ваш email для входа в аккаунт
          </CardDescription>
          <CardAction>
            <Button variant='link' className='text-blush hover:text-blush/80' asChild>
              <a href='/register'>Регистрация</a>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
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
            variant='outline'
            type='submit'
            className='w-full bg-black text-white'
            onClick={handleSubmit}>
            Войти
          </Button>
          <Button variant='outline' className='w-full border-sand hover:bg-sand/50'>
            Войти с Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
