import React from 'react';

const CheckMark = () => (
  <svg
    className="h-5 w-5 text-green-600 mr-3"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export interface ToolDoneProps {
  message: string;
}

export function ToolDone({ message }: ToolDoneProps) {
  return (
    <div className="rounded-lg border bg-green-50 p-4 my-2 max-w-xl w-full">
      <div className="flex items-center">
        <CheckMark />
        <span className="text-sm text-green-700">{message}</span>
      </div>
    </div>
  );
}

export default ToolDone;