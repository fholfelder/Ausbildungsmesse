<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode';
import { useRouter } from 'vuetify/lib/composables/router.mjs';
import { watch } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const router = useRouter();

const qrcode = useQRCode('https://www.puzzleyou.de/jobs', { width: 250 })

let timeout: ReturnType<typeof setTimeout> | null = null;

function onSubmit() {
  emit('update:modelValue', false);
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      timeout = setTimeout(() => {
        onSubmit()
      }, 5000);
    } else {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    }
  }
);
</script>

<template>
  <div>
    <v-dialog max-width="700" v-model="props.modelValue">
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-card-title>
            <h3>Das war leider falsch</h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <h3>Versuche es gerne erneut!</h3>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onSubmit" color="success" variant="elevated">Nochmal!</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<style scoped>
</style>
