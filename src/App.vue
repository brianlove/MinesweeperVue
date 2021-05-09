<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MinesweeperGame from '@/components/MinesweeperGame.vue';

@Options({
  components: {
    MinesweeperGame,
  },
})
export default class App extends Vue {}
</script>

<template>
  <MinesweeperGame />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
