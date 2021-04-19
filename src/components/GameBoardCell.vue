
<script>
import Cell from '@/types/cell.ts';

export default {
  name: "GameCell",
  props: {
    cell: Cell,
  },
  methods: {
    clickCell(cell) {
      console.info("click cell", cell); // DEBUG
      cell.hasFlag = !cell.hasFlag;
    }
  },
}
</script>

<template>
  <div class="cell" :class="{ mine: cell.hasMine, flag: cell.hasFlag }" @click="clickCell(cell)">
    <span v-if="!cell.hasFlag">{{cell.numAdjacent}}</span>
    <span v-if="cell.hasFlag">F</span>
    <!-- {{cell}} -->
    <!-- <span v-if="cell.hasMine">X</span> -->
  </div>
</template>

<style scoped>
.cell {
  background-color: var(--cell-background);
  border: 1px solid #999;
  display: table-cell;
  height: var(--cell-size, 20px);
  width: var(--cell-size, 20px);
  vertical-align: middle;
}

.cell:hover {
  background-color: lightblue;
  border: 1px solid midnightblue;
}

.cell.flag {
  background-color: lightgreen;
}

.cell.mine {
  background-color: salmon;
}

.cell.mine:hover {
  background-color: red;
  border: 1px solid crimson;
}
</style>
