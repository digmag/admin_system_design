import { createEntityAdapter, EntityState } from "@reduxjs/toolkit"
import { injectToApi } from ".."
import { Bill } from "../clients/data"
import { Transaction } from "./data"

const token = sessionStorage.getItem('access')

console.log(`ws://185.103.70.190:8080/api/ws?token=${sessionStorage.getItem('access')}`)

const transactionAdapter = createEntityAdapter<Transaction>({})
const ws = new WebSocket(`ws://185.103.70.190:8080/api/ws?token=${sessionStorage.getItem('access')}`) 
ws.onopen = e => console.log("открылись", e)
ws.onclose = (e) => console.log("закрылись",e)
ws.onerror = e => console.log("ошибка",e)
const transactions = injectToApi({
    endpoints: builder=>({
        getAllTransactions: builder.query<EntityState<Transaction, string>, Bill["id"]>({
            query: (id)=> ({
                url: `/api/core/bill/transactions/${id}`,
                method:"GET",
                headers: {
                    Authorization: `Bearer ${token}` 
                  }
            }),
            transformResponse(response: Array<Transaction>) {
                return transactionAdapter.addMany(transactionAdapter.getInitialState(),response)
            },
            providesTags: result => 
                result ? [...(result.ids as string[]).map(id => ({ type: 'TRANSACTION' as const, id })), 'TRANSACTION'] : ['TRANSACTION'],
            async onCacheEntryAdded(_, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }){
                
                
                try{
                    await cacheDataLoaded
                    const listner = (event: MessageEvent<any>) => {
                        const data = JSON.parse(event.data) as Transaction
                        console.log(data)
                        if(data){
                            updateCachedData(draft => {
                                transactionAdapter.upsertOne(draft, {
                                    id: data.id, 
                                    from: data.from,
                                    to: data.to,
                                    amount: data.amount
                                })
                            })
                        }
                    }
                    ws.onmessage = listner
                }
                catch {}
                await cacheEntryRemoved
                console.log("закрываемся")
                ws.close()
            }
        })
    })
})

export const {useGetAllTransactionsQuery}=transactions
export type { Transaction } from './data'