<script>
import GameBoardRow from '@/components/GameBoardRow.vue';

export default {
  name: "GameBoard",
  components: {
    GameBoardRow,
  },
  props: {
    size: Number,
    mines: Number,
  }
}
</script>

<template>
  <h1>Game board goes here</h1>

  <div class="board">
    <GameBoardRow />
    <GameBoardRow />
    <GameBoardRow />
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
