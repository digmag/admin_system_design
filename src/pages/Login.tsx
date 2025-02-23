import { Container, Title } from "@mantine/core";
import LoginForm from "../widgets/authForm/LoginForm";

const Login = () => (
  <Container size={"sm"}>
    <Title>Вход</Title>
    <LoginForm />
  </Container>
);

export default Login;
