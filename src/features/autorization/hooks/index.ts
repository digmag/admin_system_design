import { useNavigate } from "react-router-dom";
import { useLazyAutorizationQuery } from "../api";
import { useForm } from "react-hook-form";
import { AutorizationFormProps } from "../api/data";
import { useAuthProvider } from "../../../shared/lib/providers/AuthProvider";
import { toast } from "react-toastify";

export const useLogin = () => {
    const [trigger] = useLazyAutorizationQuery()
    const nav = useNavigate();
    const {control, handleSubmit, formState:{isValid}} = useForm<AutorizationFormProps>({
        defaultValues: {
            email : "",
            password: "",
        }
    })
    const {setIsAuth} = useAuthProvider()
    const onSubmit = (values: AutorizationFormProps) =>{
        trigger(values).unwrap().then(data=>{
            localStorage.setItem("refresh", data.refreshToken)
            sessionStorage.setItem("access", data.accessToken)
            setIsAuth(true)
            nav(`/`)
            toast.success("Успешно вошли")
        }).catch(error=>{
            toast.error("Не удалось войти")
        })
    }
    return {
        handleSubmit, onSubmit, control, isValid
    }
}