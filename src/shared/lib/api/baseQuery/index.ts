import { fetchBaseQuery } from "@reduxjs/toolkit/query";


const url = '185.103.70.190';
const urlLocalhost = 'localhost';
export const baseUrl = `http://${urlLocalhost}:8080`;
export const baseQueryWithHeaders = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders(headers){
        if(sessionStorage.getItem("access")&&!headers.has("Authorization")){
            headers.set("Authorization", `Bearer ${sessionStorage.getItem("access")}`)}
        return headers
    }
})