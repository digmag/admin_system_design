import { Button, PasswordInput, Select, TextInput } from "@mantine/core"
import { useForm } from "react-hook-form"
import { RegistrationFormProps } from "./api/data"
import { FormItem } from "../../shared/ui/templates/formItem"
import { useLazyRegistrationQuery } from "./api"
import { data } from "react-router-dom"
import { toast } from "react-toastify"


export const RegistrationForm = ()=>{
    const [trigger] = useLazyRegistrationQuery()
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
                toast.error("Не удалось зарегистрироваться")
            }
            else{
                toast.success("Зарегистрировали")
            }
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
                    return (<TextInput label="Email" placeholder="Введите email" defaultValue={value} {...rst}/>)
                }}
            />
            <FormItem
                control={control}
                name="status"
                rules={{required: true}}
                render = {({
                    field:{value, ...rst}
                })=>{
                    return(
                        <Select label="Роль пользователя" placeholder="Введите пароль" data={[
                                        { value: 'USER', label: 'Пользователь' },
                                        { value: 'EMPLOYEE', label: 'Администратор' },
                                    ]} defaultValue={value} {...rst}/>
                    )
                }}
            />
            <FormItem
                control={control}
                name= "password"
                rules={{required:true}}
                render = {({
                    field: {value, ...rst}
                })=>{
                    return (
                        <PasswordInput label="Пароль" placeholder="Введите пароль" defaultValue={value} {...rst}/>
                    )
                }}
            />
            <Button fullWidth mt="sm" variant="filled" size="md" radius={"md"} color="indigo" disabled={!isValid} type="submit">Зарегистрироваться</Button>
        </form>
    )
}