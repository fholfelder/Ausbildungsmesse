<template>
  <div :class="keyboardClass"></div>
</template>

<script lang="ts">
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    },
    input: {
      type: String
    }
  },
  data: () => ({
    keyboard: null
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
      layout: {
        'default': [
          '0 1 2 3 4 5 6 7 8 9',
          'q w e r t z u i o p {bksp}',
          '{lock} a s d f g h j k l {enter}',
          '{shift} y x c v b n m , . / {shift}',
          '{space}'
        ],
        'shift': [
          '0 1 2 3 4 5 6 7 8 9',
          'Q W E R T Z U I O P {bksp}',
          '{lock} A S D F G H J K L {enter}',
          '{shift} Y X C V B N M < > ? {shift}',
          '{space}'
        ]
      }
    });
    document.querySelector('.hg-button-enter').textContent = 'enter';
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);

      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift() {
      const currentLayout = this.keyboard.options.layoutName;
      const shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    }
  }
};
</script>

<style>
.hg-button {
  font-size: 22px;
}
</style>
