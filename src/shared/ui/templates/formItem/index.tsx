import { Text } from "@mantine/core"
import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form"

type FormItemType<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName> & {
    label?: string
}

export const FormItem = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    label,
    render,
    control,
    name,
    defaultValue,
    rules,
}: FormItemType<TFieldValues, TName>) => {
    const isRequired =
        rules?.required &&
        ((typeof rules.required === 'boolean' && rules.required === true) ||
            typeof rules.required === 'string' ||
            rules.required.value === true)
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={vals => {
                return (
                    <div style={{display:"flex", flexDirection:'column', gap:'0.25rem', width:"100%"}}>
                        <Text c={"orange"}>
                            {label}
                            {isRequired && label && <span className='required'>{' *'}</span>}
                        </Text>
                        {render(vals)}
                    </div>
                )
            }}
        />
    )
}