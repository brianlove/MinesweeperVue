<script>
export default {
  name: 'GameControls',
  data: function() {
    return {
      gameSize: this.size,
      numMines: this.mines,
      isSizeValid: true,
      isMinesValid: true,
    };
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
  methods: {
    reset() {
      if ( typeof this.gameSize != 'number' ) {
        console.error("Invalid input - 'Size' must be a number");
        this.isSizeValid = false;
        return;
      }
      if ( typeof this.numMines != 'number' ) {
        console.error("Invalid input - 'Mines' must be a number");
        this.isMinesValid = false;
        return;
      }

      this.isSizeValid = true;
      this.isMinesValid = true;

      this.$emit('game-reset', {size: this.gameSize, mines: this.numMines});
    }
  }
}
</script>

<template>
  <div class="config">
    <div>
      Size:
      <input
        type="text"
        :class="{ invalid: !isSizeValid }"
        v-model.number="gameSize"
      />
    </div>
    <div>
      Mines:
      <input
        type="text"
        :class="{ invalid: !isMinesValid }"
        v-model.number="numMines"
      />
    </div>
    <button type="button" @click="reset">Reset</button>
  </div>

</template>

<style scoped>
.config {
  display: flex;
  margin-bottom: 0.5rem;
}

.config > * {
  margin-right: 0.5rem;
}

.invalid {
  background-color: salmon;
  border: 1px solid red;
}

input {
  width: 30px;
}
</style>
