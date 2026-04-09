'use server'

import { signOut } from "@/shared/lib/auth/auth"

export async function signOutUser() {
  try {
    const result = await signOut({ redirect: false })
    console.log('Client: signOut result', result)
    return result
  } catch (error) {
    console.error('Ошибка выхода:', error)
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' }
  }
}
