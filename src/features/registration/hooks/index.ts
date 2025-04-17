import { useNavigate } from "react-router-dom"
import { useRegistrationMutation } from "../api"
import { useForm } from "react-hook-form"
import { RegistrationFormProps } from "../api/data"
import { toast } from "react-toastify"

export const useRegister = () => {
    const [trigger] = useRegistrationMutation()
        const nav = useNavigate()
        const {control, handleSubmit, formState:{isValid}} = useForm<RegistrationFormProps>({
            defaultValues: {
                email : "",
                password: "",
                status: "USER"
            }
        })
        const onSubmit = (values: RegistrationFormProps) =>{
            trigger(values).then(response=>{
                console.log(response);
                if(response.error){
                    toast.error("Не удалось зарегистрировать пользователя")
                }
                else{
                    toast.success("Удачно зарегистрировали пользователя")
                    nav(`/`)
                }
            })
        }
        return {
            handleSubmit, onSubmit, control, isValid
        }
}