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
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const isPasswordValid = formData.password.length >= 8 && formData.password.length <= 32
  const passwordsMatch = formData.password === formData.confirmPassword && formData.password.length > 0
  const isFormValid = formData.email && isPasswordValid && passwordsMatch

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!isFormValid) {
      if (!isPasswordValid) {
        setError('Пароль должен быть от 8 до 32 символов')
      } else if (!passwordsMatch) {
        setError('Пароли не совпадают')
      }
      return
    }

    console.log(formData)
    const result = await registerUser(formData)
    console.log(result)

    if (result && 'error' in result) {
      setError(result.error)
    } else if (result && 'id' in result) {
      setSuccess('Аккаунт успешно создан! Теперь войдите.')
      setFormData({ email: '', password: '', confirmPassword: '' })
    }
  }

  return (
    <div className='flex items-center justify-center bg-cream'>
      <Card className='w-full max-w-sm shadow-lg'>
        <CardHeader>
          <CardTitle className='font-display text-2xl text-primary'>Создать аккаунт</CardTitle>
          <CardDescription className='text-black'>
            Введите ваши данные для создания аккаунта
          </CardDescription>
          {error && <div className='mt-2 text-sm text-red-600'>{error}</div>}
          {success && <div className='mt-2 text-sm text-green-600'>{success}</div>}
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
                  minLength={8}
                  maxLength={32}
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className='border-sand focus:border-mint'
                />
                <div className='text-xs text-gray-500'>
                  {formData.password.length}/32 символов (мин. 8)
                </div>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='confirmPassword' className='text-primary'>
                  Повтор пароля
                </Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  required
                  minLength={8}
                  maxLength={32}
                  value={formData.confirmPassword}
                  onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className='border-sand focus:border-mint'
                />
                {formData.confirmPassword && !passwordsMatch && (
                  <div className='text-xs text-red-600'>Пароли не совпадают</div>
                )}
                {formData.confirmPassword && passwordsMatch && (
                  <div className='text-xs text-green-600'>Пароли совпадают</div>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-3'>
          <Button
            variant='outline'
            type='submit'
            disabled={!isFormValid}
            className='w-full bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={handleSubmit}>
            Зарегистрироваться
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
