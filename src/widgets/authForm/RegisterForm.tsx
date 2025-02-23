import { Button, TextInput, PasswordInput, Select, Container } from "@mantine/core";
import { RegistrationForm } from "../../features/registration";

const RegisterForm = () => {
  return (
    <Container mt={"md"}>
      <RegistrationForm/>
    </Container> 
  );
};

export default RegisterForm;
