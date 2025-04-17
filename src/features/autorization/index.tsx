import { Button, TextInput, PasswordInput } from "@mantine/core";
import { FormItem } from "../../shared/ui/templates/formItem";
import { useLogin } from "./hooks";

const AutorizationForm = () => {
    const {handleSubmit, onSubmit, control, isValid} = useLogin();
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
