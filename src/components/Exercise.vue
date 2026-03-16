<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const code = ref(
  `Wie lautet der Wert von text nach Ausführung dieses Programms?

text = "🎀🎁🎂🎂🎉🎌🎈🎔🎤🎫🧩🎩🎨🎁"

text.REPLACE("🎔", "a")
text.REPLACE("🎃", "b")
text.REPLACE("🎅", "c")
text.REPLACE("🧨", "d")
text.REPLACE("🎌", "e")
text.REPLACE("🎆", "f")
text.REPLACE("🎒", "g")
text.REPLACE("🎕", "h")
text.REPLACE("🎡", "i")
text.REPLACE("🎥", "j")
text.REPLACE("🎭", "k")
text.REPLACE("🎉", "l")
text.REPLACE("🎓", "m")
text.REPLACE("🎤", "n")
text.REPLACE("🎨", "o")
text.REPLACE("🎀", "p")
text.REPLACE("🎦", "q")
text.REPLACE("🎄", "r")
text.REPLACE("🧩", "s")
text.REPLACE("🎫", "t")
text.REPLACE("🎁", "u")
text.REPLACE("🎠", "v")
text.REPLACE("🎈", "w")
text.REPLACE("🎪", "x")
text.REPLACE("🎩", "y")
text.REPLACE("🎂", "z")`
)
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
          <v-card-text style="white-space: pre-line;">
            <code>{{ code }}</code>
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
