<script setup lang="ts">
import { Alphabet } from '@/enums/AlphabetEnum';

defineProps<{
  solution: string
}>()

function createExerciseTextForSolution(solution: string) {
  let text = `Wie lautet der Wert von text nach Ausführung dieses Programms?

text = "`;

  const _solution: string = solution.toUpperCase();
  for (let character of _solution) {
    text += Alphabet[character as keyof typeof Alphabet];
  }

  text += `"

  `;

  for (const [letter, emoji] of Object.entries(Alphabet)) {
    text += `text.REPLACE("${emoji}", "${letter.toLowerCase()}")
    `;
  }

  return text;
}
</script>

<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Aufgabenstellung</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="codeCard">
          <v-card-text style="white-space: pre-line; font-size: 16px;">
            <code>{{ createExerciseTextForSolution(solution) }}</code>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.codeCard {
  background-color: #f0f0f0;
  font-family: "Segoe UI Mono";
}
</style>
