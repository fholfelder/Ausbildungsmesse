<script setup lang="ts">

function createExerciseText() {
  let text = `Wie viele Dreiecke verstecken sich hier?

     /\\
    /__\\
   /\\  /\\
  /__\\/__\\
 /\\  /\\  /\\
/__\\/__\\/__\\
  `;

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
          <v-card-text class="codeText">
            <code>{{ createExerciseText() }}</code>
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

.codeText {
  font-family: monospace;
  font-size: 16px;
  white-space: pre;
}
</style>
