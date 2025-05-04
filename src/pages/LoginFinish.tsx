import { Container } from "@mantine/core";
import { useLoginFinish } from "../widgets/loginFinish";
import { requestPermissions, sendEvent } from "../shared/lib/firebase/messaging";
function register() {
  if (navigator.serviceWorker.controller === null) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js').then(() => {
      requestPermissions()
    }).catch(err => console.error(err))
  }
  else {
    requestPermissions()
  }

}
register()
const LoginFinish = () => {
  const { Component } = useLoginFinish();
  return (
    <Container>
      <Component />
    </Container>
  );
};

export default LoginFinish;
