import { Button, Container, Modal, PasswordInput, Select, Text, TextInput, Title } from "@mantine/core"
import { CreateLoanModalProps } from "../../shared/lib/api/loans/data"
import { FormItem } from "../../shared/ui/templates/formItem"
import { Loan, useCreateLoanMutation } from "../../shared/lib/api/loans"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useLoanModel } from "./hooks"


export const CreateLoanModal= ({ opened, onClose }: CreateLoanModalProps) =>{
    const {handleSubmit, onSubmit, control, isValid} = useLoanModel(onClose);
    return(
        <Modal opened={opened} onClose={onClose}>
            <Text fz="xl">Создание кредитного тарифа</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormItem 
                    control={control}
                    name="loanName"
                    rules={{required: true}}
                    render={({
                        field: {value, ...rst}
                    })=>{
                        return (<TextInput label="Название тарифа" placeholder="Введите название тарифа" defaultValue={value} {...rst}/>)
                    }}
                />
                <FormItem
                    control={control}
                    name="percent"
                    rules={{required: true}}
                    render = {({
                        field:{value, ...rst}
                    })=>{
                        return(<TextInput type="number" label="Ставка процента" placeholder="Введите ставку процента" defaultValue={value} {...rst}/>)
                    }}
                />
                <Button fullWidth mt="sm" variant="filled" size="md" radius={"md"} color="indigo" disabled={!isValid} type="submit">Создать</Button>
            </form>
        </Modal>
    )
}