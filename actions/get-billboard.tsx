import { Billboard } from '@/types'

export const getBillboard = async (storeID: string, billboardID: string): Promise<Billboard> => {
  const URL = `http://localhost:3001/api/${storeID}/billboards`
  const res = await fetch(`${URL}/${billboardID}`)
  const data = await res.json()
  return data
}