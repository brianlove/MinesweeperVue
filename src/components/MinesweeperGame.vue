<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
  name: "MinesweeperGame",
  components: {
    GameBoard,
  },
  data: function() {
    return {
      isGameActive: true,
      didPlayerWin: false,
    }
  },
  methods: {
    onGameFinished(playerVictory) {
      this.isGameActive = false;
      this.didPlayerWin = playerVictory;
    },
  },
}
</script>

<template>
  <div class="minesweeper">
    <GameBoard
      :size="8"
      :mines="8"
      @game-finished="onGameFinished"
    />
  </div>
  <div v-if="!isGameActive">
    <div v-if="didPlayerWin">You won!</div>
    <div v-if="!didPlayerWin">You lose!</div>
  </div>
</template>

<style scoped>
.minesweeper {
  margin: 0 auto;
}
</style>
