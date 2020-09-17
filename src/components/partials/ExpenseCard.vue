<template>
  <div class="expense-card">
    <div>
      <div>
        <p><span class="bold">Category</span> {{ expenseProp.category }}</p>

        <p><span class="bold">Description</span> {{ expenseProp.description }}</p>

        <p><span class="bold">Cost</span> {{ expenseProp.cost }}</p>
        
        <p><span class="bold">Date Created</span> {{ expenseProp.datecreated }}</p>
        
        <p><span class="bold">Week of Year</span> {{ expenseProp.weekOfYear }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ExpenseTable",
  props: {
    expenseProp: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
}
</style>
