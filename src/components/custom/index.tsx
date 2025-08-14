import PlotHTML, { PlotHTMLProps } from "./plot";
import ToolLoading, { ToolLoadingProps } from "./loading-spinner";
import ToolDone from "./tool-done";

// Define component prop types
export type ComponentProps = {
  plot: PlotHTMLProps;
  toolLoading: ToolLoadingProps;
  toolDone: { message: string };
  // Add other component types here as you create them
};

// Type-safe component map
const ComponentMap = {
  plot: PlotHTML,
  toolLoading: ToolLoading,
  toolDone: ToolDone,
} as const satisfies Record<keyof ComponentProps, React.ComponentType<any>>;

export default ComponentMap;