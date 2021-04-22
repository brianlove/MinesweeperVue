
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
  <div class="cell" :class="{ mine: cell.hasMine, flag: cell.hasFlag }" @click="clickCell(cell)" @contextmenu.prevent="toggleFlag(cell)">
    <span v-if="!cell.hasFlag && !cell.hasMine">{{cell.numAdjacent}}</span>
    <font-awesome-icon icon="bomb" v-if="cell.hasMine" />
    <font-awesome-icon icon="flag" v-if="cell.hasFlag" />
  </div>
</template>

<style scoped>
.cell {
  background-color: var(--cell-background);
  border: 1px solid var(--cell-border);
  display: table-cell;
  height: var(--cell-size, 20px);
  width: var(--cell-size, 20px);
  vertical-align: middle;
}

.cell:hover {
  background-color: #333;
  border: 1px solid midnightblue;
  color: white;
}

.cell.revealed {
  background-color: #eee;
  color: black;
}

.cell.mine.revealed {
  background-color: red;
  color: white;
}

.cell.unrevealed-mine {
    color: white;
}

.cell.flag {
  background-color: lightblue;
}

.cell.mine {
  background-color: salmon;
}

.cell.mine:hover {
  background-color: red;
  border: 1px solid crimson;
}
</style>
