import { injectToApi } from ".."
import { Loan, LoanResponce } from "./data"

const loans = injectToApi({
    endpoints: builder=>({
        getAllLoans: builder.query<Array<LoanResponce>, void>({
            query: ()=> ({
                url: "/api/employee/loan",
                method:"GET"
            }),
            providesTags: ["LOANS"]
        }),
        createLoan: builder.mutation<LoanResponce, Loan>({
            query: body=>({
                url: '/api/employee/loan/create',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ["LOANS"]
        })
    })
})

export const {useGetAllLoansQuery, useCreateLoanMutation}=loans