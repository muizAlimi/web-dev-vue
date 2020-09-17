<template>
  <div class="events container">
    <h2 class="subtitle is-3">
      Check out our upcoming events
    </h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter">
        <ExpenseCard v-for="currentExpense in expense" :key="expense.id"
          :expenseProp="expense"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ExpenseCard from "./ExpenseCard";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
export default {
  name: "EventsList",
  components: {
    ExpenseCard
  },
  data() {
    return {
      expense: []
    };
  },
  methods: {
    submit(data) {
      StoreUtils.commit("table/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("expense/getExpenses");
    }
  }
};
</script>
<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}
</style>
