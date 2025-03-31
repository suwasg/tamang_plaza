import { ReactNode } from "react";

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function IconButton({ onClick, children }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
    >
      {children}
    </button>
  );
}
