import { injectToApi } from ".."
import { Bill } from "../clients"

export interface Transaction{
    id:string
    from: Bill
    to: Bill
    amount: number
}

const transactions = injectToApi({
    endpoints: builder=>({
        getAllTransactions: builder.query<Array<Transaction>, Bill["id"]>({
            query: (id)=> ({
                url: `/api/employee/bill/${id}/transactions`,
                method:"GET"
            }),
            providesTags: ["TRANSACTION"]
        })
    })
})

export const {useGetAllTransactionsQuery}=transactions