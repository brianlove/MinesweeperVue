
<script>
import Cell from '@/types/cell.ts';

export default {
  name: "GameCell",
  props: {
    cell: Cell,
  },
  computed: {
    numAdjacentClass() {
      const numAdj = this.cell.numAdjacent;
      return (this.cell.isRevealed && numAdj > 0) ? `adjacent-${numAdj}` : '';
    },
    cellLabel() {
      return this.cell.numAdjacent > 0 ? this.cell.numAdjacent : '';
    }
  },
  methods: {
    clickCell(cell) {
      this.$emit('click-cell', cell);
    },
    toggleFlag(cell) {
      this.$emit('toggle-flag', cell);
    }
  },
}
</script>

<template>
  <div
    class="cell"
    :class="[
      numAdjacentClass,
      {
        adjacent: cell.isRevealed && cell.numAdjacent > 0,
        mine: cell.isRevealed && cell.hasMine,
        flag: cell.hasFlag,
        revealed: cell.isRevealed
      }
    ]"
    @click="clickCell(cell)"
    @contextmenu.prevent="toggleFlag(cell)"
  >
    <span v-if="cell.isRevealed && !cell.hasFlag && !cell.hasMine">
      {{cellLabel}}
    </span>
    <font-awesome-icon icon="bomb" v-if="cell.isRevealed && cell.hasMine" />
    <font-awesome-icon icon="flag" v-if="cell.hasFlag" />
  </div>
</template>

<style scoped>
.cell {
  background-color: var(--cell-background);
  border: 1px solid var(--cell-border);
  display: table-cell;
  font-size: 140%;
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

.cell.adjacent {
    font-weight: bold;
}

.cell.adjacent-1 {
    color: green;
}

.cell.adjacent-2 {
    color: blue;
}

.cell.adjacent-3 {
    color: purple;
}

.cell.adjacent-4,
.cell.adjacent-5,
.cell.adjacent-6,
.cell.adjacent-7,
.cell.adjacent-8 {
    color: red;
}
</style>
