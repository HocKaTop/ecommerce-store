import { Category } from '@/types'

export const getCategory = async (storeID: string, ID: string): Promise<Category> => {
  const URL = `http://localhost:3001/api/${storeID}/categories`
  const res = await fetch(`${URL}/${ID}`)
  const data = await res.json()
  return data
}