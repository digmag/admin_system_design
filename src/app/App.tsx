import { MantineProvider, AppShell } from "@mantine/core";
import Router from "./router";
import Header from "../shared/ui/Header";
import { useEffect, useState } from "react";
import { useAuthProvider } from "../shared/lib/providers/AuthProvider";
import MyNavbar from "../shared/ui/Navbar";
import { ThemeContext } from "../shared/lib/providers/ThemeProvider";
import { useLazyGetThemeQuery, useSetThemeMutation } from "../shared/lib/api/theme";
import { useAppHook } from "./hooks";


const App = () => {
  const {checked, setChecked, isAuth} = useAppHook();  
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
