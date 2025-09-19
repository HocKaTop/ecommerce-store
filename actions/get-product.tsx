import { Product } from '@/types'

export const getProduct = async (storeID: string, ID: string): Promise<Product> => {
  const URL = `http://localhost:3001/api/${storeID}/products`
  const res = await fetch(`${URL}/${ID}`)
  const data = await res.json()
  return data
}