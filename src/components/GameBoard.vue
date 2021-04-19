<script lang="ts">
import { reactive } from 'vue';

import GameBoardCell from '@/components/GameBoardCell.vue';
import Grid from '@/types/grid';

export default {
  name: "GameBoard",
  components: {
    GameBoardCell,
  },
  props: {
    size: {
      type: Number,
      required: true,
    },
    mines: {
      type: Number,
      required: true,
    },
  },
  setup(props: {size: number, mines: number}) {
    const data = {
      grid: reactive(new Grid(props.size, props.mines)),
    }
    // const grid = new Grid(props.size, props.mines);
    console.info("[GameBoard] grid:", data); // DEBUG
    return {
      data,
    }
  }
}
</script>

<template>
  <h1>Game board goes here</h1>

  <div class="board">
    <div class="row" v-for="(row, index) in data.grid.cells" :key="index">
      <!-- {{row}} -->
      <GameBoardCell v-for="(cell, index) in row" :key="index" :cell="cell" />
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
