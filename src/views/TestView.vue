<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import SolutionInput from '../components/SolutionInput.vue'
</script>

<template>
  <div>
    <v-row class="mt-12 mb-12">
        <v-col class="d-flex justify-center">
          <h1>Lös den Code und dreh am Rad!!!</h1>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols=1></v-col>
      <v-col cols="5">
        <Exercise></Exercise>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="5">
        <SolutionInput></SolutionInput>
      </v-col>
      <v-col cols=1></v-col>
    </v-row>
  </div>
</template>
