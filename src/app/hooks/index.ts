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

    useEffect(()=>{
        const function1 = () => {
            fetch('http://185.103.70.190:8080/api/theme', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${sessionStorage.getItem('access')}`,
                },
                body: JSON.stringify({ theme: theme }),
                keepalive: true,
            });
        }
        window.addEventListener('unload', function1);
        return() => {
            window.removeEventListener('unload', function1);
        }
        }, [theme]) //нерабочая штука, нужно будет править

    return{
        checked, setChecked, isAuth
    }
}