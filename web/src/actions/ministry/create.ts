'use server'

import { apiFetch } from '@/lib/apiFetch'
import { getUser } from '@/lib/session'
import { CreateMinistry, Ministry } from '@/types/ministry'

export async function createMinistry({ name }: CreateMinistry) {
  const user = await getUser()

  if (!user) {
    throw new Error('The user must be logged in to create a ministry')
  }

  return await apiFetch<Ministry>('/ministry', {
    method: 'POST',
    body: JSON.stringify({
      name,
      userId: user.id,
    }),
  })
}
