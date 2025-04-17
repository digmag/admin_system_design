import { Button, PasswordInput, Select, TextInput } from "@mantine/core"
import { useForm } from "react-hook-form"
import { RegistrationFormProps } from "./api/data"
import { FormItem } from "../../shared/ui/templates/formItem"
import { useRegistrationMutation } from "./api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import { useRegister } from "./hooks"


export const RegistrationForm = ()=>{
    const {handleSubmit, onSubmit, control, isValid} = useRegister();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem 
                control={control}
                name="email"
                rules={{required: true}}
                render={({
                    field: {value, ...rst}
                })=>{
                    return (<TextInput label="Логин" placeholder="Введите логин" defaultValue={value} {...rst}/>)
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
            <Button fullWidth mt="sm" variant="filled" size="md" radius={"md"} color="indigo" disabled={!isValid} type="submit">Зарегистрировать</Button>
        </form>
    )
}