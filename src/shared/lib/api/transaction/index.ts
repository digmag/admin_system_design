import { injectToApi } from ".."
import { Bill } from "../clients/data"
import { Transaction } from "./data"

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