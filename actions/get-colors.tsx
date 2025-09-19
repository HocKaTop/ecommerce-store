import { Color } from '@/types'

export const getColors = async (storeId: string): Promise<Color[]> => {
  const URL = `http://localhost:3001/api/${storeId}/colors`
  const res = await fetch(URL)
  const data = await res.json()
  return data
}