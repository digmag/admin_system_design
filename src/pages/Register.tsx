import { Container, Title } from "@mantine/core";
import RegisterForm from "../widgets/authForm/RegisterForm";

const Register = () => (
  <Container size={"sm"}>
    <Title>Регистрация</Title>
    <RegisterForm />
  </Container>
);

export default Register;
