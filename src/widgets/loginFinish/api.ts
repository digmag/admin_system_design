import { AutorizationResponse } from "../../features/autorization/api/data"
import { injectToApi } from "../../shared/lib/api"

const loginFinish = injectToApi({
    endpoints: builder => ({
        finishLogin : builder.query<AutorizationResponse, {token: string}>({
            query: params => ({
                url: `/api/employee/client/login?code=${params.token}`,
                method: 'POST'
            })
        })
    })
})

export const {useLazyFinishLoginQuery}=loginFinish;