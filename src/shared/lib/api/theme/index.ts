import { injectToApi } from ".."

export interface Theme{
    theme: string
}

const theme = injectToApi({
    endpoints: builder=>({
        getTheme: builder.query<Theme, void>({
            query: ()=> ({
                url: "/api/theme",
                method:"GET"
            }),
            providesTags: ["THEME"]
        }),
        setTheme: builder.mutation<Theme, Theme>({
            query: body=>({
                url: '/api/theme',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ["THEME"]
        })
    })
})

export const {useLazyGetThemeQuery, useSetThemeMutation}=theme