<script>
export default {
  name: "GameCell",
  props: {
    adj: Number,
    rev: Boolean,
    mine: Boolean,
    flag: Boolean,
  }
}
</script>

<template>
  <div class="cell">
    {{adj}}
  </div>
</template>

<style scoped>
.cell {
  background-color: var(--cell-background);
  border: 1px solid #999;
  display: table-cell;
  height: var(--cell-size, 20px);
  width: var(--cell-size, 20px);
}

.cell:hover {
  background-color: lightblue;
  border: 1px solid midnightblue;
}
</style>
