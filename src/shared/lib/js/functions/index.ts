import { useSetThemeMutation } from "../../api/theme";
import { useAuthProvider } from "../../providers/AuthProvider";
import { useThemeProvider } from "../../providers/ThemeProvider";

export const functionBillCard = (type: string, status: string) => {
    let billType="";
    let billStatus="";
    if(type==="NORMAL"){billType="Основной"}
    else if(type ==="CREDIT"){billType="Кредитный"}
    else{billType="Сберегательный"}
    if(status==="OPEN"){billStatus="Открыт"}
    else if(status ==="BLOCKED"){billStatus="Заблокирован"}
    else{billStatus="Закрыт"}
    return{
        billType, billStatus
    }
}

export const functionGetHeaderInfo = () => {
    const {isAuth, setIsAuth}=useAuthProvider()
    const [setThemeTrigger] = useSetThemeMutation();
    const {checked, setChecked} = useThemeProvider();
    return{
        isAuth, setThemeTrigger, setChecked, setIsAuth
    }
}