<script setup>
import Card from "primevue/card";

const preset = {
  root: {
    class: ["rounded-[10px]", "bg-zinc-900", "text-violet-400"],
  },
  body: {
    class: ["!p-5", "!gap-0"],
  },
  title: {
    class: "!font-light !text-base",
  },
};

const ptOptions = {
  mergeSections: true,
  mergeProps: true,
};
</script>
<template>
  <Card :pt="preset" :pt-options="ptOptions">
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #content>
      <slot name="content"></slot>
    </template>
  </Card>
</template>
