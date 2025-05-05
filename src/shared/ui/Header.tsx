import { Group, Button, Title, Container, Flex, Header, Box, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import { functionGetHeaderInfo } from "../lib/js/functions";
import { deleteToken } from "../lib/firebase/messaging";
import Kus from '../../shared/lib/assets/icons/kus.svg'

const HeaderSimple = () => {
  const { isAuth, setThemeTrigger, setChecked, setIsAuth } = functionGetHeaderInfo();
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Flex>
        <Group sx={{ width: "50%", justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ width: '2.5rem' }} src={Kus} />
          <Title order={2}>Кусь-Банк</Title>
        </Group>
        <Box justify="flex-end" gap={"xl"} align={"center"} sx={{ flexGrow: 1, width: "50%" }}>
          <Group position="right">
            {isAuth ?
              <>
                <Button component={Link} to="/register" variant="filled" size="md" radius={"md"} color="indigo" style={{ marginRight: '1rem' }}>
                  Регистрация пользователя
                </Button>
                <Button component={Link} to="/" variant="filled" size="md" radius={"md"} color="red" style={{ marginRight: '2rem' }} onClick={async () => {
                  await setThemeTrigger({ theme: localStorage.getItem('theme')! })
                  setChecked(false)
                  sessionStorage.clear()
                  localStorage.clear()
                  deleteToken()
                  setIsAuth(false)
                }}>
                  Выход
                </Button>
              </> :
              <Button variant="filled" size="md" radius={"md"} color="indigo" onClick={() => {
                location.href = 'http://localhost:7000?appId=employee&redirectURI=http://localhost:5174/login/finish'
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
