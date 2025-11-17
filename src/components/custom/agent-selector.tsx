import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type AgentOption = {
  id: string;
  name: string;
  description: string;
};

export const AVAILABLE_AGENTS: AgentOption[] = [
  {
    id: "thinking_agent",
    name: "Thinking Agent",
    description:
      "Advanced agent with reasoning capabilities. Uses chain-of-thought processing for complex queries and detailed analysis.",
  },
  {
    id: "standard_agent",
    name: "Standard Agent",
    description:
      "Fast and efficient agent for straightforward queries. Optimized for quick responses and direct answers.",
  },
];

interface AgentSelectorProps {
  selectedAgent: string | null;
  onSelectAgent: (agentId: string) => void;
  onContinue: (keepCurrent?: boolean) => void;
}

export function AgentSelector({
  selectedAgent,
  onSelectAgent,
  onContinue,
}: AgentSelectorProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="animate-in fade-in-0 zoom-in-95 bg-background flex max-w-2xl flex-col rounded-lg border shadow-lg">
        <div className="flex flex-col gap-3 border-b p-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Select Your Agent
          </h1>
          <p className="text-muted-foreground text-sm">
            Choose which agent you'd like to use for your energy data analysis.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-6">
          {AVAILABLE_AGENTS.map((agent) => (
            <button
              key={agent.id}
              onClick={() => onSelectAgent(agent.id)}
              className={cn(
                "flex flex-col gap-2 rounded-lg border-2 p-4 text-left transition-all hover:border-primary hover:bg-accent",
                selectedAgent === agent.id
                  ? "border-primary bg-accent"
                  : "border-gray-200",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{agent.name}</h3>
                {selectedAgent === agent.id && (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {agent.description}
              </p>
            </button>
          ))}
          <div className="flex gap-2 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
            <svg
              className="h-5 w-5 flex-shrink-0 text-yellow-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4v2m-6.364-4.364l1.414-1.414m2.828 7.778l1.414 1.414m4.242-7.778l1.414 1.414m2.828 7.778l1.414 1.414M12 3a9 9 0 100 18 9 9 0 000-18z"></path>
            </svg>
            <p className="text-sm text-yellow-800">
              Switching agents will start a new chat.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t p-6">
          <Button
            onClick={() => onContinue(true)}
            size="lg"
            variant="outline"
          >
            Keep current agent
          </Button>
          <Button
            onClick={() => onContinue(false)}
            disabled={!selectedAgent}
            size="lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}