import { useState } from "react";
import { useGetAllClientsQuery } from "../../../shared/lib/api/clients";

export const useClients = () => {
    const {data, isLoading}=useGetAllClientsQuery()
    const [search, setSearch] = useState("")

    const filteredUsers = data?.filter(user =>
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    return{
        isLoading, filteredUsers, search, setSearch
    }
}