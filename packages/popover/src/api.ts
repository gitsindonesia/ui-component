export const popoverPlacements = [
  "top",
  "right",
  "bottom",
  "left",
  "bottom-start",
  "bottom-end",
  "top-start",
  "top-end",
  "left-start",
  "left-end",
  "right-start",
  "right-end",
] as const;

export type VPopoverPlacement = typeof popoverPlacements[number];