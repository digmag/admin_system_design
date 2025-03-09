import { MantineProvider, AppShell, Navbar } from "@mantine/core";
import Router from "./router";
import Header from "../shared/ui/Header";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import { useAuthProvider } from "../shared/lib/providers/AuthProvider";
import MyNavbar from "../shared/ui/Navbar";


const App = () => {
  const {isAuth}=useAuthProvider()
  return(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell header={<Header/>} children={<Router/>} navbar={<>{isAuth&&<MyNavbar/>}</>}/>
    </MantineProvider>
  )}

export default App;
