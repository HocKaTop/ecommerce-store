import { Product } from '@/types'
import qs from 'query-string'

interface Query{
  categoryID?:string
  colorID?:string
  sizeID?:string
  isFeatured?:boolean
}


export const getProducts = async (query: Query, storeId: string): Promise<Product[]> => {
  const URL = `http://localhost:3001/api/${storeId}/products`
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorID: query.colorID,
      sizeID: query.sizeID,
      categoryID: query.categoryID,
      isFeatured: query.isFeatured,
    }
  })
  const res = await fetch(URL)
  const data = await res.json()
  return data
}