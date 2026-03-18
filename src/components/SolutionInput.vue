<script setup lang="ts">
import { ref } from 'vue'
import Keyboard from './Keyboard.vue'
import SuccessDialog from './SuccessDialog.vue'
import ErrorDialog from './ErrorDialog.vue'

defineProps<{
  msg: string
}>()

const solutionInput = ref("");
const isDialogOpen = ref();
const isFocused = ref(false);
const showError = ref(false);
const errorMessages = ref();

function checkInput() {
  const solved = solutionInput.value.toLowerCase() == "puzzlewantsyou"
  isDialogOpen.value = solved
  if (!solved) {
    // errorMessages.value = ["Das war leider falsch!"]
    showError.value = true;
  }
}

function enterCharacter(event) {
  isFocused.value = true;
  switch(event) {
    case "{bksp}":
      solutionInput.value = solutionInput.value.slice(0, -1);  
      break;
    case "{enter}":
      checkInput();
      break;
    case "{space}":
      solutionInput.value = solutionInput.value + " ";
      break;
    case "{tab}":
    case "{lock}":
    case "{shift}":
      console.log("HELLLO")
      break;
    default:
      solutionInput.value = solutionInput.value + event;
  }
}
</script>

<template>
  <div>
    <!-- <v-snackbar
      v-model="showError"
      text="Deine Eingabe war leider nicht richtig!"
      color="error"
      variant="tonal"
      location="top end"
      rounded="lg"
      timeout="1000"
      height="80"
    >
    </v-snackbar> -->
    <ErrorDialog v-model="showError"></ErrorDialog>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Eingabe Lösung</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field class="mb-5" v-model="solutionInput" label="Lösungswort" :errorMessages="errorMessages" :focused="true" variant="outlined" height="200" @keyup.enter="checkInput"></v-text-field>
        <v-btn color="success" @click="checkInput">Eingabe prüfen</v-btn>
        <SuccessDialog v-model="isDialogOpen"></SuccessDialog>
      </v-col>
      <v-col cols="12">
        <Keyboard @onKeyPress="enterCharacter"></Keyboard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
</style>
