import { injectToApi } from ".."

export interface Client{
    id:string
    email:string
    status:"EMPLOYEE"|"USER"
    active: boolean
}

export interface Bill{
    id: string
    userId: string,
    amount: number,
    type: "NORMAL"|"CREDIT"|"SAVING",
    status: "OPEN"|"CLOSED"|"BLOCKED",
    name: string
}

const clients = injectToApi({
    endpoints: builder=>({
        getAllClients: builder.query<Array<Client>, void>({
            query: ()=> ({
                url: "/api/employee/users",
                method:"GET"
            }),
            providesTags: ["CLIENTS"]
        }),
        getUser: builder.query<Client, Client["id"]>({
            query: id=> ({
                url: `/api/employee/users/${id}`,
                method:"GET"
            }),
            providesTags: ["CLIENT"]
        }),
        getUsersBills: builder.query<Array<Bill>, Client["id"]>({
            query: id=> ({
                url: `/api/employee/users/${id}/bills`,
                method:"GET"
            }),
            providesTags: ["BILLS"]
        }),
        blockUser: builder.mutation<void, Client["id"]>({
            query: id=> ({
                url: `/api/employee/users/block/${id}`,
                method:"PATCH"
            }),
            invalidatesTags: ["CLIENTS", "CLIENT"]
        })
    })
})

export const {useGetAllClientsQuery, useGetUserQuery, useGetUsersBillsQuery, useBlockUserMutation}=clients
