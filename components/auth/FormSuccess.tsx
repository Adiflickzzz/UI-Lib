import { CheckIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center rounded-md bg-green-300/[0.5] p-3 text-green-500  gap-x-1 text-sm font-semibold">
      <CheckIcon className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};
