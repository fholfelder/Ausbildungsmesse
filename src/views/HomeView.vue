<script setup lang="ts">
import { useRouter } from 'vuetify/lib/composables/router.mjs';

const router = useRouter()
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <img alt="puzzleYOU" class="logo" src="@/assets/logo.png" height="250" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Lös den Code und dreh am Rad!!!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card class="card-animation mt-12" @click="router.push('exercise')" color="#1F82A5">
          <v-card-item class="go-card text-center d-flex flex-column align-center justify-center">
            Los gehts!
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.go-card {
  aspect-ratio: 1;
  width: 350px;
  font-size: 32px;
}
.card-animation {
  animation: pulseCard 1.5s ease-in-out infinite;
}

@keyframes pulseCard {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}
</style>
