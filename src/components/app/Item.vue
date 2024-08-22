<script setup>
import Button from "../primevue/Button.vue";
import Card from "../primevue/Card.vue";

const { todo, markTodoFn, deleteTodoFn } = defineProps({
  todo: Object,
  markTodoFn: Function,
  deleteTodoFn: Function,
});

const textClass = {
  "line-through": todo.done,
  "text-emerald-300": todo.done,
};
const buttonsClass = {
  flex: true,
  hidden: todo.done,
};
</script>
<template>
  <Card>
    <template #title>
      <div class="flex justify-between items-start gap-4">
        <div :class="textClass">
          {{ todo.text }}
        </div>
        <div :class="buttonsClass">
          <Button @click="markTodoFn(todo.id)" icon="pi pi-check" text />
          <Button @click="deleteTodoFn(todo.id)" icon="pi pi-trash" text />
        </div>
      </div>
    </template>
  </Card>
</template>
