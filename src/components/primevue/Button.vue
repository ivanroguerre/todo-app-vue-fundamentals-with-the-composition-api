<script setup>
import Button from "primevue/button";

const preset = {
  root: ({ props, context, parent }) => ({
    class: [
      // Sizes & Spacing
      {
        "!p-2": props.size === null,
      },
      // --- Severity Buttons ---
      // Primary Button
      {
        "text-white":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "bg-violet-400":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        "border-none":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      // Primary Text Button
      {
        "text-violet-400":
          props.text && props.severity === null && !props.plain,
      },
      // --- Severity Button States ---
      // Primary
      {
        "hover:bg-violet-600 hover:border-none":
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      { "focus:ring-purple-400": props.severity === null },
      // Text & Outlined Button
      {
        "hover:!bg-transparent hover:!text-purple-800":
          (props.text || props.outlined) &&
          props.severity === null &&
          !props.plain,
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
  <Button :pt="preset" :pt-options="ptOptions" />
</template>
