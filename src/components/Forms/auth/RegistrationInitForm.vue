<template>
  <div class="app-form">
    <p class="form-title">Registration Init Form</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="email"
        type="email"
        label="Email"
        validation="required"
        validation-name="Email"
        placeholder="Please enter your email"
      />
      <FormulateInput
        name="firstName"
        type="text"
        label="First Name"
        validation="required"
        validation-name="First Name"
        placeholder="Please enter your first name"
      />
      <FormulateInput
        name="lastName"
        type="text"
        label="Last Name"
        validation="required"
        validation-name="Last Name"
        placeholder="Please enter your last name"
      />
      <FormulateInput type="submit" label="Create Account" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "RegistrationInitForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/registrationInit");
    }
  }
};
</script>

<style scoped></style>
