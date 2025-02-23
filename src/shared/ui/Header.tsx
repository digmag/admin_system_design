import { Group, Button, Title, Container, Flex, Header, Box } from "@mantine/core";
import { Link } from "react-router-dom";

const HeaderSimple = () => {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Container>
        <Flex>
          <Group sx={{width: "50%"}}>
            <Title order={2}>Кусь-Банк</Title>
          </Group>
          <Box justify="flex-end" gap={"xl"} align={"center"} sx={{ flexGrow: 1 , width: "50%"}}>
            <Group position="right">
              <Button component={Link} to="/login" variant="filled" size="md" radius={"md"} color="indigo">
                Вход
              </Button>
              <Button component={Link} to="/register" variant="filled" size="md" radius={"md"} color="indigo">
                Регистрация
              </Button>
            </Group>
          </Box>
        </Flex>
      </Container>
    </Header>
  );
};

export default HeaderSimple;
