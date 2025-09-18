import { Category } from '@/types'

export const getCategories = async (storeId: string): Promise<Category[]> => {
  const URL = `http://localhost:3001/api/${storeId}/categories`
  const res = await fetch(URL)
  const data = await res.json()
  return data
}