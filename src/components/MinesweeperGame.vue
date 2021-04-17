<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
  name: "MinesweeperGame",
  components: {
    GameBoard,
  }
}
</script>

<template>
  <div class="minesweeper">
    <GameBoard :size="8" :mines="8" />
  </div>
</template>

<style scoped>
.minesweeper {
  margin: 0 auto;
}
</style>
