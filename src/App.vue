<script setup>
import { computed, ref } from "vue";

import Button from "@/components/primevue/Button.vue";
import Input from "@/components/primevue/Input.vue";

import Item from "@/components/app/Item.vue";

const items = ref([]);
const todoInputModel = ref();

const tasksToDo = computed(() => items.value.filter((item) => !item.done));
const tasksDone = computed(() => items.value.filter((item) => item.done));

function addTodo(text) {
  items.value.push({ id: Date.now(), text, done: false });
}
function markTodo(id) {
  const toMarkTodoIdx = items.value.findIndex((item) => item.id === id);
  if (toMarkTodoIdx > -1)
    items.value.splice(toMarkTodoIdx, 1, {
      ...items.value[toMarkTodoIdx],
      done: true,
    });
}
function deleteTodo(id) {
  const toDeleteTodoIdx = items.value.findIndex((item) => item.id === id);
  if (toDeleteTodoIdx > -1) items.value.splice(toDeleteTodoIdx, 1);
}

function onSubmit() {
  if (todoInputModel.value.trim() === "") return;
  addTodo(todoInputModel.value);
  todoInputModel.value = undefined;
}
</script>

<template>
  <div class="min-h-screen bg-zinc-950 pt-16 px-4">
    <div class="flex flex-col gap-14 mx-auto max-w-[800px]">
      <form @submit.prevent="onSubmit()">
        <div class="flex gap-3">
          <Input
            fluid
            placeholder="Add a new task"
            required
            v-model="todoInputModel"
          />
          <Button type="submit" icon="pi pi-plus" />
        </div>
      </form>
      <template v-if="tasksToDo.length > 0">
        <div class="flex flex-col gap-4">
          <h2 class="text-white text-base">
            Tasks to do - {{ tasksToDo.length }}
          </h2>
          <Item
            v-for="todoItem in tasksToDo"
            :key="todoItem.id"
            :todo="todoItem"
            :markTodoFn="markTodo"
            :deleteTodoFn="deleteTodo"
          />
        </div>
      </template>
      <template v-if="tasksDone.length > 0">
        <div class="flex flex-col gap-4">
          <h2 class="text-white text-base">Done - {{ tasksDone.length }}</h2>
          <Item
            v-for="doneItem in tasksDone"
            :key="doneItem.id"
            :todo="doneItem"
            :markTodoFn="markTodo"
            :deleteTodoFn="deleteTodo"
          />
        </div>
      </template>
    </div>
  </div>
</template>
