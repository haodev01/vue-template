<template>
  <div>
    <h1>Login Page</h1>
    <LoginForm />
  </div>
</template>

<script>
import { LoginForm } from "../components/Login";
export default {
  name: "LoginPage",
  components: { LoginForm },
};
</script>
