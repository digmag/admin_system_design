import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import { keyGen } from "../../KeyGen";


const url = '185.103.70.190';
const urlLocalhost = 'localhost';
export const baseUrl = `http://${url}:8080`;
export const baseQueryWithHeaders = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders(headers) {
        if (sessionStorage.getItem("access") && !headers.has("Authorization")) {
            headers.set("Authorization", `Bearer ${sessionStorage.getItem("access")}`)
        }
        headers.set("ik", keyGen.currentKey)
        return headers
    }
})

export const baseQueryWithSwitchKEy: BaseQueryFn<
    FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
    let result = await baseQueryWithHeaders(args, api, extraOptions)
    if (result.meta?.response?.status === 200) {
        keyGen.gen()
    }

    return result
} 