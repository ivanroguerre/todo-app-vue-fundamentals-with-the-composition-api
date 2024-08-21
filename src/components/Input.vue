<script setup>
import InputText from "primevue/inputtext";

const preset = {
  root: ({ props, context, parent }) => ({
    class: [
      // Size
      {
        "py-2.5 !px-2": props.size == null,
      },
      // Colors
      "text-neutral-300",
      "placeholder:text-neutral-500",
      { "bg-zinc-950 ": !context.disabled },
      { "border-purple-950": !props.invalid },
      // States
      {
        "hover:border-purple-800": !context.disabled && !props.invalid,
        "focus:ring-purple-400": !context.disabled,
        "bg-zinc-900": context.disabled,
      },
    ],
  }),
};

const ptOptions = {
  mergeSections: true,
  mergeProps: true,
};
</script>
<template>
  <InputText :pt="preset" :pt-options="ptOptions" />
</template>
