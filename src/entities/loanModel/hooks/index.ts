import { useForm } from "react-hook-form"
import { Loan, useCreateLoanMutation } from "../../../shared/lib/api/loans"
import { toast } from "react-toastify"

export const useLoanModel = ( onClose: ()=>void) => {
    const [trigger] = useCreateLoanMutation()
    const {control, handleSubmit, formState:{isValid}} = useForm<Loan>({
        defaultValues: {
            loanName : "",
            percent: 0
        }
    })
    const onSubmit = (values: Loan) =>{
        trigger({loanName:values.loanName, percent:Number(values.percent)}).unwrap().then(()=>{
            toast.success("Успешно добавлен тариф")
            onClose()
        }).catch(error=>{
            toast.error("Ошибка в создании тарифа")
        })
    }
    return{
        handleSubmit, onSubmit, control, isValid
    }
}