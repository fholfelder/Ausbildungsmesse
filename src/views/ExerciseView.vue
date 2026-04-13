<script setup lang="ts">
import Exercise from '../components/Exercise.vue';
import SolutionInput from '../components/SolutionInput.vue';
import { useRouter } from 'vuetify/lib/composables/router.mjs';
import { useCookies } from '@vueuse/integrations/useCookies'

const router = useRouter();
const latestSolution = useCookies(["latestSolution"]);

const wordPool = [
  "puzzlewantsyou",
  "puzzleneedsyou",
  "ausbildungforyou"
];

function generateSolution() {
  if (wordPool.length === 0) return "";

  let randomSolution = "";

  do {
    const randomIndex = Math.floor(Math.random() * wordPool.length);
    randomSolution = wordPool[randomIndex]!;
  } while (randomSolution === latestSolution.get('latestSolution'));

  console.log(randomSolution);

  latestSolution.set('latestSolution', randomSolution);
  return randomSolution;
}

const solution = generateSolution();
</script>

<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-end">
        <img alt="puzzleYOU" class="logo" src="@/assets/logo.png" height="120" @click="router.push('/')" />
      </v-col>
    </v-row>
    <v-row class="mb-12">
        <v-col class="text-center d-flex flex-column align-center justify-center">
          <h1>Lös den Code und dreh am Rad!!!</h1>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols=1></v-col>
      <v-col cols="5">
        <Exercise :solution="solution"></Exercise>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="5">
        <SolutionInput :solution="solution"></SolutionInput>
      </v-col>
      <v-col cols=1></v-col>
    </v-row>
  </div>
</template>
