import { MantineProvider, AppShell } from "@mantine/core";
import Router from "./router";
import Header from "../shared/ui/Header";
import { useEffect, useState } from "react";
import { useAuthProvider } from "../shared/lib/providers/AuthProvider";
import MyNavbar from "../shared/ui/Navbar";
import { ThemeContext } from "../shared/lib/providers/ThemeProvider";
import { useLazyGetThemeQuery, useSetThemeMutation } from "../shared/lib/api/theme";


const App = () => {
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
    const handleBeforeUnload = () => {
      setThemeTrigger({theme:localStorage.getItem('theme')!})
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return() => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [])

  return(
    <ThemeContext.Provider value={{ checked, setChecked }}>
      <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        colorScheme: checked ? 'dark' : 'light',
      }}>
        <AppShell header={<Header/>} children={<Router/>} navbar={<>{isAuth&&<MyNavbar/>}</>}/>
      </MantineProvider>
    </ThemeContext.Provider>
  )}

export default App;
