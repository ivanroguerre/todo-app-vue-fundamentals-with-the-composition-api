<script setup>
import { ref } from "vue";
import Input from "./components/Input.vue";

const input = ref("");
</script>

<template>
  <div class="min-h-screen bg-zinc-950">
    <Input class="text-base" placeholder="Add a new task" :size="null" />
    <Input placeholder="hola" disabled />
  </div>
</template>
