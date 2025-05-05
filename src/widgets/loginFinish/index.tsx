import { Navigate, useSearchParams } from "react-router-dom";
import { useLazyFinishLoginQuery } from "./api";
import { useAuthProvider } from "../../shared/lib/providers/AuthProvider";
import { useEffect } from "react";
import { Title } from "@mantine/core";
import { requestPermissions } from "../../shared/lib/firebase/messaging";

function register() {
    if (navigator.serviceWorker.controller === null) {
        navigator.serviceWorker.register('../firebase-messaging-sw.js').then(() => {
            requestPermissions()
        }).catch(err => console.error(err))
    }
    else {
        requestPermissions()
    }

}
export const useLoginFinish = () => {
    const [params] = useSearchParams();
    const { setIsAuth } = useAuthProvider();
    const [trigger, { data, isError, isSuccess }] = useLazyFinishLoginQuery();

    useEffect(() => {
        if (params.get('code') !== null) {
            const token = params.get('code')!
            trigger({ token })
        }
    }, [params, trigger])

    useEffect(() => {
        if (data) {
            localStorage.setItem('refresh', data.refreshToken)
            sessionStorage.setItem('access', data.accessToken)
            register()
        }
    }, [data])

    const Component = () => {
        if (isSuccess) {
            setIsAuth(true)
            return <Navigate to="/" />
        }
        if (isError) {
            return <Title order={1}>Не удалось войти в систему</Title>
        }
    }
    return { Component }
}