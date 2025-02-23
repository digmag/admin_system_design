import { MantineProvider, AppShell } from "@mantine/core";
import Router from "./router";
import Header from "../shared/ui/Header";

const App = () => (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell header={<Header/>} children={<Router/>}/>
    </MantineProvider>
  );

export default App;
