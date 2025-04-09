import { Group, Button, Title, Container, Flex, Header, Box, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../lib/providers/AuthProvider";
import { useSetThemeMutation } from "../lib/api/theme";
import { useThemeProvider } from "../lib/providers/ThemeProvider";

const HeaderSimple = () => {
    const {isAuth, setIsAuth}=useAuthProvider()
    const [setThemeTrigger] = useSetThemeMutation();
    const {checked, setChecked} = useThemeProvider();
  
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
        <Flex>
          <Group sx={{width: "50%", justifyContent:'center'}}>
            <Title order={2}>Кусь-Банк</Title>
          </Group>
          <Box justify="flex-end" gap={"xl"} align={"center"} sx={{ flexGrow: 1 , width: "50%"}}>
            <Group position="right">
              {isAuth?
                <>
                  <Button component={Link} to="/register" variant="filled" size="md" radius={"md"} color="indigo" style={{marginRight:'1rem'}}>
                    Регистрация пользователя
                  </Button>
                  <Button component={Link} to="/" variant="filled" size="md" radius={"md"} color="red" style={{marginRight:'2rem'}} onClick={()=>{
                    setThemeTrigger({theme:localStorage.getItem('theme')!})
                    setChecked(false)
                    sessionStorage.clear()
                    localStorage.clear()
                    setIsAuth(false)
                  }}>
                    Выход
                  </Button>
                </>:
                  <Button variant="filled" size="md" radius={"md"} color="indigo" onClick={()=>{
                    location.href='http://localhost:7000?appId=employee&redirectURI=http://localhost:5173/login/finish'
                  }}>
                    Вход
                  </Button>
              }
            </Group>
          </Box>
        </Flex>
    </Header>
  );
};

export default HeaderSimple;
