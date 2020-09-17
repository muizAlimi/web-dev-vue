<template>
  <div class="app-form">
    <p class="form-title">Create Expense Form</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="category"
        type="text"
        label="Category"
        validation="required"
        validation-name="Category"
        placeholder="Category"
      />
      <FormulateInput
        name="description"
        type="text"
        label="Description"
        validation="required"
        validation-name="Description"
        placeholder="Description"
      />
      <FormulateInput
        name="cost"
        type="text"
        label="Cost"
        validation="required"
        validation-name="Cost"
        placeholder="Cost"
      />
      <FormulateInput
        name="email"
        type="email"
        label="Email"
        validation="required"
        validation-name="Email"
        placeholder="Email"
      />
      <FormulateInput type="submit" label="Create" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "CreateExpenseForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("expense/createExpense");
    }
  }
};
</script>

<style scoped></style>
