import type Component from "./link-button.svelte";

export declare class LinkButtonType extends Component {
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLAnchorElement>>,
    "size"
  > &
    Component["$$prop_def"];
}
