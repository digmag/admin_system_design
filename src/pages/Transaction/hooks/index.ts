import { useNavigate, useParams } from "react-router-dom";
import { useGetAllTransactionsQuery } from "../../../shared/lib/api/transaction";

export const useTransaction = () => {
    const {id}=useParams()
    const {data, isLoading} = useGetAllTransactionsQuery(id!);
    const nav = useNavigate()
    return {
        isLoading, data, nav
    }
}