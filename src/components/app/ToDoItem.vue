<script setup>
import Button from "../primevue/Button.vue";
import Card from "../primevue/Card.vue";

const { text } = defineProps({
  text: String,
});
</script>
<template>
  <Card>
    <template #title>
      <div class="flex justify-between items-start gap-4">
        <div>
          {{ text }}
        </div>
        <div class="flex">
          <Button icon="pi pi-check" text />
          <Button icon="pi pi-trash" text />
        </div>
      </div>
    </template>
  </Card>
</template>
