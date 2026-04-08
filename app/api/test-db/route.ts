import { prisma } from '@/shared/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const userCount = await prisma.user.count()

    return NextResponse.json({
      success: true,
      message: 'Подключение к PostgreSQL работает!',
      userCount,
      note: 'Пока пользователей нет — это нормально',
    })
  } catch (error: unknown) {
    console.error('Ошибка подключения к БД:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Ошибка подключения к базе данных',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка',
      },
      { status: 500 },
    )
  }
}
