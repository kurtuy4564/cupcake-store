'use server'

import { signIn } from "@/shared/lib/auth/auth";
import { FormDataLogin } from "../types/type";

export async function singInWithCredentials(formData: FormDataLogin) {
  try {
    const result = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    })
    
    return result
  } catch (error) {
    console.error('Ошибка входа:', error)
    return { error: error instanceof Error ? error.message : 'Неизвестная ошибка' }
  }
}
