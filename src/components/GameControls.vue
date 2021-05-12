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
  computed: {
    minesLeft() {
      return this.numMines - this.flagsUsed;
    },
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
    flagsUsed: {
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
<div class="controls">
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
  <div class="info">
    Flags: {{flagsUsed}}
    Mines left: {{minesLeft}}
  </div>
</div>
</template>

<style scoped>
.controls {
  display: flex;
  margin-bottom: 0.5rem;
}

.config {
  display: flex;
}

.config > * {
  margin-right: 0.5rem;
}

.info {
  display: flex;
  padding: 0.2rem 0;
}

.invalid {
  background-color: salmon;
  border: 1px solid red;
}

input {
  width: 30px;
}
</style>
