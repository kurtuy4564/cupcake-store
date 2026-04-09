'use server'

import { prisma } from '@/shared/lib/prisma'
import { FormDataRegister } from '../types/type'
import { saltAndHashPassword } from '@/shared/lib/auth/password'

export async function registerUser(formData: FormDataRegister) {
  const { email, password, confirmPassword } = formData

  if (password !== confirmPassword) {
    throw new Error('Пароли не совпадают')
  }

  console.log('Registering user with data:', formData)

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } })

    if (existingUser) {
      return { error: 'Пользователь с таким email уже существует' }
    }

    const pwHash = await saltAndHashPassword(password)
    const user = await prisma.user.create({
      data: {
        email,
        password: pwHash,
      },
    })

    console.log('Register:', formData)

    return user
  } catch (error) {
    console.error('Ошибка регистрации:', error)
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' }
  }
}
