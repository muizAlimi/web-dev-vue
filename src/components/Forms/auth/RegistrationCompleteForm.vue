<template>
  <div class="app-form">
    <p class="form-title">Registration Complete Form</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="username"
        type="text"
        label="Username"
        validation="required"
        validation-name="Username"
        placeholder="Please enter your Username"
      />
      <FormulateInput
        name="token"
        type="number"
        label="Token"
        validation="required"
        validation-name="Token"
        placeholder="Please enter your Token"
      />
      <FormulateInput
        name="email"
        type="email"
        label="Email"
        validation="required"
        validation-name="Email"
        placeholder="Please enter your Email"
      />
      <FormulateInput
        name="password"
        type="password"
        label="Password"
        validation="required"
        validation-name="Password"
        placeholder="Please enter your Password"
      />
      <FormulateInput
        name="password_confirm"
        type="password"
        label="Confirm Password"
        validation="required|confirm"
        validation-name="Confirm Password"
        placeholder="Confirm your Password"
      />
      <FormulateInput type="submit" label="Create Account" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "RegistrationCompleteForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/registrationComplete");
    }
  }
};
</script>

<style scoped></style>
