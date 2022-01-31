<script lang="ts">
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../utils/eventforwarder";
  let className: string = "";
  export { className as class };
  export let size: "small" | "medium" | "large" = "medium";
  export let variant: "primary" | "secondary" | "cta" | "conversion";
  export let disabled: boolean = false;

  const forwardEvents = forwardEventsBuilder(current_component);
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
    @apply pointer-events-none text-gray-800 bg-sand-dark;
  }

  .medium {
    @apply py-2 px-6 text-btn-small leading-4 rounded-xl;
  }

  .large {
    @apply py-3 px-8 text-p-medium leading-[1.25] min-w-[10rem] rounded-2xl;
  }

  .small {
    @apply py-1 px-4 text-p-xsmall rounded-xl;
  }
</style>

<button
  use:forwardEvents
  {disabled}
  class:disabled
  class="transition-all duration-[50ms] inline-block text-center shadow-light font-semibold bg-none text-black {className} {variant} {size}"
  {...$$restProps}
>
  <slot />
</button>
