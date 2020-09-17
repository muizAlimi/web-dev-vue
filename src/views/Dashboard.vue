<template>
  <div>
    <p>A Beautiful Dashboard page</p>
    <FetchTodoListTable/>
  </div>
</template>

<script>
import FetchTodoListTable from "../components/tables/todo/FetchTodoListTable";
export default {
  name: "Dashboard",
  components: {FetchTodoListTable}
};
</script>

<style scoped></style>
