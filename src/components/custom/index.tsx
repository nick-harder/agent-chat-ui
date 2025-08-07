import PlotHTML, { PlotHTMLProps } from "./plot";

// Define component prop types
type ComponentProps = {
  plot: PlotHTMLProps;
  // Add other component types here as you create them
};

// Type-safe component map
const ComponentMap = {
  plot: PlotHTML,
} as const satisfies Record<keyof ComponentProps, React.ComponentType<any>>;

export default ComponentMap;
export type { ComponentProps };