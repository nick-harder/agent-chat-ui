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

const CrossMark = () => (
  <svg
    className="h-5 w-5 text-red-600 mr-3"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export interface ToolDoneProps {
  message: string;
  status: 'done' | 'error';
}

export function ToolDone({ message, status }: ToolDoneProps) {
  const isDone = status === 'done';
  return (
    <div
      className={`rounded-lg border ${
        isDone ? 'bg-green-50' : 'bg-red-50'
      } p-4 my-2 max-w-xl w-full`}
    >
      <div className="flex items-center">
        {isDone ? <CheckMark /> : <CrossMark />}
        <span className={`text-sm ${isDone ? 'text-green-700' : 'text-red-700'}`}>
          {message}
        </span>
      </div>
    </div>
  );
}

export default ToolDone;