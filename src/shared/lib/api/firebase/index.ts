import { injectToApi } from ".."

const firebase = injectToApi({
    endpoints: builder => ({
        firebaseRegisterUser: builder.query<void, void>({
            query: () => ({
                url: '/api/notification/register',
                method: "POST",
                headers: {
                    'firebase-token': sessionStorage.getItem("fbToken")!
                }
            })
        })
    })
})

export const { useLazyFirebaseRegisterUserQuery } = firebase