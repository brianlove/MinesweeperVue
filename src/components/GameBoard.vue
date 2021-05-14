<script lang="ts">
import { reactive } from 'vue';

import GameBoardCell from '@/components/GameBoardCell.vue';
import Cell from '@/types/cell';
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
  // TODO: How should `context` be typed in `setup()`?  I'm not finding anything online,
  //       although the situation is somewhat new (TypeScript + Vue 3 + Composition API).
  setup(props: {size: number, mines: number}, context: any) {
    const data = reactive({
      isActive: true,
    });
    const grid = reactive(new Grid(props.size, props.mines));

    console.info("[GameBoard] grid:", data); // DEBUG

    /**
     * Evaluate the game after the user has clicked a cell.
     *
     * @param clickedCell The cell that the user clicked.
     */
    function onCellClick(clickedCell: Cell) {
      console.info("[GameBoard] clicked cell:", clickedCell); // DEBUG
      if ( !data.isActive ) {
        return;
      }

      const result = grid.clickCell(clickedCell);

      if ( !result.gameActive ) {
        console.info("GAME OVER:", result); // DEBUG
        context.emit('game-finished', result?.playerVictory);
      }
    }

    /**
     * Evaluate the game after the user has flagged (or unflagged) a cell.
     *
     * @param flaggedCell The cell that was flagged (or unflagged)
     */
    function onFlagToggle(flaggedCell: Cell) {
      if ( !data.isActive ) {
        return;
      }

      const result = grid.toggleFlag(flaggedCell);

      const flagsUsed = grid.countFlaggedCells();
      context.emit('update-flag-count', flagsUsed);

      if ( !result.gameActive ) {
        console.info("GAME OVER:", result); // DEBUG
        context.emit('game-finished', result?.playerVictory);
      }
    }

    return {
      data,
      grid,
      onCellClick,
      onFlagToggle,
    }
  },
}
</script>

<template>
<div class="board-container">
  <div class="board">
    <div class="row" v-for="(row, index) in grid.cells" :key="index">
      <GameBoardCell
        v-for="(cell, index) in row"
        :key="index"
        :cell="cell"
        @click-cell="onCellClick"
        @toggle-flag="onFlagToggle"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
.board-container {
  display: flex;
  justify-content: space-around;
}

.board {
  display: flex;
  flex-direction: column;
}
</style>
