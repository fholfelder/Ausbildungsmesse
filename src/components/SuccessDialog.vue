<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <v-dialog max-width="500" v-model="props.modelValue">
      <template v-slot:default="{ isActive }">
        <v-card title="puzzleWantsYOU">
          <v-card-text>
            Richtig gehört... Wir suchen dich!
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="emit('update:modelValue', false)" color="success">Alles klar</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<style scoped>
</style>