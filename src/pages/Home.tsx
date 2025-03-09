import {  Container, Title, Flex, Text } from "@mantine/core";

const Home = () => {
  return (
    <Container>
      <Flex justify={"center"} mt={"xl"}>
        <Title order={1}>Добро пожаловать в Кусь-Банк</Title>
      </Flex>
      <Flex justify={"center"} mt={"xs"}>
        <Text c="dimmed">Для дальнейшего использования сервиса, Вам необходимо войти в систему</Text>
      </Flex>
    </Container>
  );
};

export default Home;
