import { injectToApi } from "../../../shared/lib/api"
import { RegistrationFormProps, RegistrationResponse } from "./data"

const registration = injectToApi({
    endpoints: builder=>({
        registration: builder.query<RegistrationResponse,RegistrationFormProps>({
            query: body=>({
                url: '/api/employee/client/registration',
                method: 'POST',
                body: body
            })
        })
    })
})

export const {useLazyRegistrationQuery}=registration;