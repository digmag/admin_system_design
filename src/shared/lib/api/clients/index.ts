import { injectToApi } from ".."
import { Bill, Client } from "./data"

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
