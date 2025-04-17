import { useNavigate, useParams } from "react-router-dom";
import { useGetAllTransactionsQuery } from "../../../shared/lib/api/transaction";
import { useEffect, useState } from "react";
import { Transaction } from "../../../shared/lib/api/transaction/data";

const ws = new WebSocket(`ws://localhost:8080/api/ws?token=${sessionStorage.getItem('access')}`)

export const useWsTransactions = (id: string) => {
    const [state, setState] = useState<Array<Transaction>>([])
    const {data, isLoading, refetch} = useGetAllTransactionsQuery(id!)
    useEffect(() => {
        if(data){
            setState([...data])
        }
    },[data])

    useEffect(()=>{
        ws.onopen = () => {
            console.log("соединение установлено")
        }
        ws.onmessage = event => {
            console.log(event.data)
            refetch();
            setState([...state, JSON.parse(event.data) as Transaction])
        }
    },[])
    console.log("o", state)
    return {
        isLoading,
        data: state
    }
}

export const useTransaction = () => {
    const {id}=useParams()
    const {data, isLoading} = useWsTransactions(id!);
    const nav = useNavigate()
    console.log("ii", id, data)
    return {
        isLoading, data, nav
    }
}