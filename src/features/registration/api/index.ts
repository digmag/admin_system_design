import { injectToApi } from "../../../shared/lib/api"
import { RegistrationFormProps, RegistrationResponse } from "./data"

const registration = injectToApi({
    endpoints: builder=>({
        registration: builder.mutation<RegistrationResponse,RegistrationFormProps>({
            query: body=>({
                url: '/api/employee/client/registration',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ["CLIENTS"]
        })
    })
})

export const {useRegistrationMutation}=registration;