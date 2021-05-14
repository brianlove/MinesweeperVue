<script>
import GameBoard from '@/components/GameBoard.vue';
import GameControls from '@/components/GameControls.vue';

export default {
  name: "MinesweeperGame",
  components: {
    GameBoard,
    GameControls,
  },
  data: function() {
    return {
      isGameActive: true,
      didPlayerWin: false,
      size: 10,
      mines: 10,
      gameKey: 1,
      flagsUsed: 0,
    };
  },
  methods: {
    onGameFinished(playerVictory) {
      this.isGameActive = false;
      this.didPlayerWin = playerVictory;
    },
    onGameReset({size, mines}) {
      this.size = size;
      this.mines = mines;
      this.flagsUsed = 0;

      this.isGameActive = true;
      this.didPlayerWin = false;

      // Force a re-render of the <GameBoard> component
      this.gameKey += 1;

      console.info("game key:", this.gameKey); // DEBUG
    },
    onUpdateFlagCount(flagsUsed) {
      this.flagsUsed = flagsUsed;
    },
  },
}
</script>

<template>
  <div class="minesweeper">
    <div class="container">
      <h1>Minesweeper</h1>

      <GameControls
        :size="size"
        :mines="mines"
        :flags-used="flagsUsed"
        @game-reset="onGameReset"
      />

      <GameBoard
        :key="gameKey"
        :size="size"
        :mines="mines"
        @game-finished="onGameFinished"
        @update-flag-count="onUpdateFlagCount"
      />

      <div class="notifications" v-if="!isGameActive">
        <div class="victory" v-if="didPlayerWin">You won!</div>
        <div class="defeat" v-if="!didPlayerWin">You lose!</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.minesweeper {
  display: flex;
  justify-content: space-around;
}

.notifications {
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.victory {
  color: green;
}

.defeat {
  color: red;
}
</style>
