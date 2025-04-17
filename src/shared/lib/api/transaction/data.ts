import { Bill } from "../clients/data"

export interface Transaction{
    id:string
    from: Bill
    to: Bill
    amount: number
}