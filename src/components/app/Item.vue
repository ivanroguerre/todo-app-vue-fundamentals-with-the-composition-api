<script setup>
import Button from "../primevue/Button.vue";
import Card from "../primevue/Card.vue";

const { text, done } = defineProps({
  text: String,
  done: Boolean,
});

const textClass = {
  "line-through": done,
  "text-emerald-300": done,
};
const buttonsClass = {
  flex: true,
  hidden: done,
};
</script>
<template>
  <Card>
    <template #title>
      <div class="flex justify-between items-start gap-4">
        <div :class="textClass">
          {{ text }}
        </div>
        <div :class="buttonsClass">
          <Button icon="pi pi-check" text />
          <Button icon="pi pi-trash" text />
        </div>
      </div>
    </template>
  </Card>
</template>
