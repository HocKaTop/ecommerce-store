import { Size } from '@/types'

export const getSizes = async (storeId: string): Promise<Size[]> => {
  const URL = `http://localhost:3001/api/${storeId}/sizes`
  const res = await fetch(URL)
  const data = await res.json()
  return data
}