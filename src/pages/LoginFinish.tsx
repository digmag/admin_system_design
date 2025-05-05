import { Container } from "@mantine/core";
import { useLoginFinish } from "../widgets/loginFinish";


const LoginFinish = () => {
  const { Component } = useLoginFinish();
  return (
    <Container>
      <Component />
    </Container>
  );
};

export default LoginFinish;
