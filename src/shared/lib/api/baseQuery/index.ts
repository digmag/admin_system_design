import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export const baseUrl = 'http://185.103.70.190:8080';
export const baseQueryWithHeaders = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders(headers){
        if(sessionStorage.getItem("access")&&!headers.has("Authorization")){
            headers.set("Authorization", `Bearer ${sessionStorage.getItem("access")}`)}
        return headers
    }
})