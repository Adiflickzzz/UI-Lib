import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="w-full text-nowrap flex items-center rounded-md bg-red-700 py-2 px-3 gap-x-2 text-sm font-medium">
      <ExclamationTriangleIcon className="size-5" />
      <p>{message}</p>
    </div>
  );
};
