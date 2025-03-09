import { Button, TextInput, PasswordInput, Container } from "@mantine/core";
import { FormItem } from "../../shared/ui/templates/formItem";
import { useLazyAutorizationQuery } from "./api";
import { useForm } from "react-hook-form";
import { AutorizationFormProps } from "./api/data";
import { toast } from "react-toastify"
import { useAuthProvider } from "../../shared/lib/providers/AuthProvider";
import { login } from "../../shared/lib/slice/authSlice";
import { useNavigate } from "react-router-dom";



const AutorizationForm = () => {
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem 
            control={control}
            name="email"
            rules={{required: true}}
            render={({
                field: {value, ...rst}
            })=>{
                return (<TextInput label="Email" placeholder="Введите email" defaultValue={value} {...rst} />)
            }}
        />
        <FormItem
            control={control}
            name="password"
            rules={{required: true}}
            render={({
                field: {value, ...rst}
            })=>{
                return (<PasswordInput label="Пароль" placeholder="Введите пароль" defaultValue={value} {...rst}/>)
            }}
        />
        <Button fullWidth mt="sm" variant="filled" size="md" radius={"md"} color="indigo" type="submit" disabled={!isValid}>Войти</Button>
    </form>
  );
};

export default AutorizationForm;
