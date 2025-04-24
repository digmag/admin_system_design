import { useEffect, useState } from "react";
import { useLazyGetThemeQuery, useSetThemeMutation } from "../../shared/lib/api/theme";
import { useAuthProvider } from "../../shared/lib/providers/AuthProvider";

export const useAppHook = () => {
    const {isAuth}=useAuthProvider()
    const [trigger] = useLazyGetThemeQuery();
    const [setThemeTrigger] = useSetThemeMutation();

    const [checked, setChecked] = useState(false);
    const theme = checked?'dark':'light';

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [checked]);

    useEffect(() =>{
    if(isAuth){
        trigger().unwrap().then(data => {
            setChecked(data.theme==='dark')
            localStorage.setItem('theme', data.theme)
        })
    }
    }, [isAuth])

    useEffect(() => {
        const handleBeforeUnload = () => {
            const theme = localStorage.getItem("theme");
            if (theme) {
                const data = new Blob(
                    [JSON.stringify({ theme })],
                    { type: "application/json" }
                );
                navigator.sendBeacon(`http://185.103.70.190:8080/api/theme/post?token=${sessionStorage.getItem('access')}`, data);
            }
            localStorage.clear()
            sessionStorage.clear()
            setChecked(false)
        }    
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return{
        checked, setChecked, isAuth
    }
}