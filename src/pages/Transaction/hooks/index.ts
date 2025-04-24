import { useNavigate, useParams } from "react-router-dom";
import { useGetAllTransactionsQuery } from "../../../shared/lib/api/transaction";
import { useEffect, useState } from "react";
import { Transaction } from "../../../shared/lib/api/transaction/data";

export const useWsTransactions = (id: string) => {
    const {data, isLoading} = useGetAllTransactionsQuery(id!)

    return {
        isLoading,
        data: Object.values(data?.entities||{}).slice()
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