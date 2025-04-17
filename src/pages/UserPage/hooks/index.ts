import { useNavigate, useParams } from "react-router-dom";
import { useBlockUserMutation, useGetUserQuery } from "../../../shared/lib/api/clients";
import { useState } from "react";
import { toast } from "react-toastify";

export const useUserPage = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const { data, isLoading } = useGetUserQuery(id!);
    const [trigger] = useBlockUserMutation();
    const [searchQuery, setSearchQuery] = useState("");

    const onClick = () => {
        trigger(id!)
            .unwrap()
            .then(() => toast.success("Успешно заблокирован пользователь"))
            .catch(() => toast.error("Ошибка в блокировке пользователя"));
    };

    return{
        isLoading, data, onClick, nav, searchQuery, setSearchQuery
    }
}