<script setup>
import InputText from "primevue/inputtext";

const preset = {
  root: ({ props, context, parent }) => {
    var _a;
    return {
      class: [
        // Font
        "leading-none",
        // Flex
        { "flex-1 w-[1%]": parent.instance.$name == "InputGroup" },
        // Spacing
        "m-0",
        { "w-full": props.fluid },
        // Size
        {
          "py-3 px-3.5": props.size == "large",
          "py-1.5 px-2": props.size == "small",
          "py-2.5 px-2": props.size == null,
        },
        // Shape
        { "rounded-md": parent.instance.$name !== "InputGroup" },
        {
          "first:rounded-l-md rounded-none last:rounded-r-md":
            parent.instance.$name == "InputGroup",
        },
        {
          "border-0 border-y border-l last:border-r":
            parent.instance.$name == "InputGroup",
        },
        {
          "first:ml-0 -ml-px":
            parent.instance.$name == "InputGroup" && !props.showButtons,
        },
        // Colors
        "text-neutral-300 dark:text-white/80",
        "placeholder:text-neutral-500 dark:placeholder:text-surface-500",
        { "bg-zinc-950 dark:bg-surface-950": !context.disabled },
        "border",
        { "border-purple-950 dark:border-surface-700": !props.invalid },
        // Invalid State
        "invalid:focus:ring-red-400",
        "invalid:hover:border-red-500",
        { "border-red-500 dark:border-red-400": props.invalid },
        // States
        {
          "hover:border-purple-800 dark:hover:border-surface-600":
            !context.disabled && !props.invalid,
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-purple-400 dark:focus:ring-primary-400 focus:z-10":
            !context.disabled,
          "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default":
            context.disabled,
        },
        // Filled State *for FloatLabel
        {
          filled:
            ((_a = parent.instance) == null ? void 0 : _a.$name) ==
              "FloatLabel" && context.filled,
        },
        // Misc
        "appearance-none",
        "transition-colors duration-200",
      ],
    };
  },
};
</script>
<template>
  <InputText :pt="preset" />
</template>
