import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
  classname?: string;
}

export const Header = ({ label, classname }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      <h1 className="text-3xl font-semibold">Auth 🔒</h1>
      <p className={(cn("text-muted-foreground text-sm"), classname)}>
        {label}
      </p>
    </div>
  );
};
