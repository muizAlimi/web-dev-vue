<template>
  <div>
    <RegistrationInitForm v-if="formStage === 0" />
    <RegistrationCompleteForm v-if="formStage === 1" />
  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";
import RegistrationInitForm from "../../Forms/auth/RegistrationInitForm";
import RegistrationCompleteForm from "../../Forms/auth/RegistrationCompleteForm";

export default {
  name: "RegistrationFormStage",
  components: { RegistrationCompleteForm, RegistrationInitForm },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  }
};
</script>

<style scoped></style>
