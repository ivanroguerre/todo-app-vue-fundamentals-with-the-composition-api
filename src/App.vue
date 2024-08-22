<script setup>
import { computed, ref } from "vue";
import Item from "./components/app/Item.vue";

const items = ref([
  { id: 1, text: "Learn Vue 3", done: false },
  { id: 2, text: "Learn Pinia", done: true },
  { id: 3, text: "Learn Vite", done: false },
]);

const tasksToDo = computed(() => items.value.filter((item) => !item.done));
const tasksDone = computed(() => items.value.filter((item) => item.done));
// margins collapse so there's no problem when both lists are present in the DOM
const tasksTodoClass = computed(() => ({
  "flex flex-col gap-4": true,
  "mb-14": tasksDone.value.length > 0,
}));
const tasksDoneClass = computed(() => ({
  "flex flex-col gap-4": true,
  "mt-14": tasksToDo.value.length > 0,
}));
</script>

<template>
  <div class="min-h-screen bg-zinc-950">
    <template v-if="tasksToDo.length > 0">
      <div :class="tasksTodoClass">
        <h2 class="text-white text-base">
          Tasks to do - {{ tasksToDo.length }}
        </h2>
        <Item
          v-for="todoItem in tasksToDo"
          :key="todoItem.id"
          :text="todoItem.text"
          :done="todoItem.done"
        />
      </div>
    </template>
    <template v-if="tasksDone.length > 0">
      <div :class="tasksDoneClass">
        <h2 class="text-white text-base">Done - {{ tasksDone.length }}</h2>
        <Item
          v-for="doneItem in tasksDone"
          :key="doneItem.id"
          :text="doneItem.text"
          :done="doneItem.done"
        />
      </div>
    </template>
  </div>
</template>
