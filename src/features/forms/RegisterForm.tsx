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
import { FormDataRegister } from '@/entities/user/types/type'
import { registerUser } from '@/entities/user/actions/register'

export const RegisterForm = () => {
  const [formData, setFormData] = useState<FormDataRegister>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    const result = await registerUser(formData)
    console.log(result);
  }

  return (
    <div className='flex items-center justify-center bg-cream'>
      <Card className='w-full max-w-sm shadow-lg'>
        <CardHeader>
          <CardTitle className='font-display text-2xl text-primary'>Создать аккаунт</CardTitle>
          <CardDescription className='text-black'>
            Введите ваши данные для создания аккаунта
          </CardDescription>
          <CardAction>
            <Button variant='link' className='text-blush hover:text-blush/80' asChild>
              <a href='/login'>Войти</a>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
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
                <Label htmlFor='password' className='text-primary'>
                  Пароль
                </Label>
                <Input
                  id='password'
                  type='password'
                  required
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className='border-sand focus:border-mint'
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password' className='text-primary'>
                  Пароль
                </Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  required
                  value={formData.confirmPassword}
                  onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
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
            Зарегистрироваться
          </Button>
          <Button variant='outline' className='w-full border-sand hover:bg-sand/50'>
            Регистрация с Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
