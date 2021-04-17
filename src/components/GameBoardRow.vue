<script>
import GameBoardCell from '@/components/GameBoardCell.vue';

export default {
  name: "GameBoardRow",
  props: {
    size: Number,
  },
  components: {
    GameBoardCell,
  },
}
</script>

<template>
  <div class="row">
    <GameBoardCell />
    <GameBoardCell />
    <GameBoardCell />
    <GameBoardCell />
  </div>
</template>

<style scoped>
.row {
  display: table;
}
</style>