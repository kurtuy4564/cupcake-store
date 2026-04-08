'use server'

import { prisma } from '@/shared/lib/prisma'
import { FormDataRegister } from '../types/type'

export async function registerUser(formData: FormDataRegister) {
  const { email, password, confirmPassword } = formData
  console.log('Registering user with data:', formData)
  
  try {
    if (password !== confirmPassword) {
      throw new Error('Пароли не совпадают')
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    })

    console.log('Register:', formData)

    return user
  } catch (error) {
    console.error('Ошибка регистрации:', error)
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' }
  }
}
