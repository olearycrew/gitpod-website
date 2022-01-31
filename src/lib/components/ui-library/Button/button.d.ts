import type Component from "./button.svelte";

export declare class Button extends Component {
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLButtonElement>>,
    "use"
  > &
    Component["$$prop_def"];

  $$events_def: { click: MouseEvent } & Component["$$events_def"];
}
