<script lang="ts">
  let className: string = "";
  export { className as class };
  export let variant: "primary" | "secondary" | "cta" | "conversion";
  export let size: "small" | "medium" | "large" = "medium";
  export let disabled: boolean = false;
  export let href: string;
</script>

<style lang="postcss">
  .primary {
    @apply bg-orange-900 hover:bg-brand-hover;
  }

  .secondary {
    @apply bg-pink-900 hover:bg-salmon-hover focus:bg-salmon-hover;
  }

  .cta {
    @apply bg-sand-dark hover:bg-orange-900 focus:bg-orange-900;
  }

  .disabled {
    @apply pointer-events-none text-gray-800;
  }

  .conversion {
    @apply leading-5 bg-orange-900 hover:bg-brand-hover focus:bg-brand-hover rounded-2xl min-w-[10rem];
  }

  .medium {
    @apply py-2 px-6 text-btn-small;
  }

  .large {
    @apply py-3 px-8 text-p-medium leading-[1.25] min-w-[10rem] rounded-2xl;
  }

  .small {
    @apply py-1 px-4 text-p-xsmall;
  }
</style>

<a
  {href}
  {disabled}
  class:disabled
  class:primary={variant === "primary"}
  class="transition-all duration-[50ms] inline-block text-center  shadow-light font-semibold bg-none rounded-xl  text-black leading-4 {className} {size}"
  {...$$restProps}
>
  <slot />
</a>
