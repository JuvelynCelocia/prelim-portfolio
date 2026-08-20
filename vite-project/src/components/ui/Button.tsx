import { cn } from "../../lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700",
        className
      )}
    >
      {children}
    </button>
  );
}