<script setup lang="ts">
import RectangleExercise from '../components/RectangleExercise.vue';
import SolutionInput from '../components/SolutionInput.vue';
import { useRouter } from 'vuetify/lib/composables/router.mjs';

const router = useRouter();

const solution = "10";
</script>

<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-end">
        <img alt="puzzleYOU" class="logo" src="@/assets/logo.png" height="120" @click="router!.push('/')" />
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
        <RectangleExercise></RectangleExercise>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="5">
        <SolutionInput :solution="solution"></SolutionInput>
      </v-col>
      <v-col cols=1></v-col>
    </v-row>
  </div>
</template>
