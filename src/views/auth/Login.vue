<template>
  <div class="jumbotron">
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from "../../components/Forms/auth/LoginForm";
export default {
  name: "Login",
  components: { LoginForm }
};
</script>