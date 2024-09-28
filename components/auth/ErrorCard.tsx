import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./BackButton";
import { CardWrapper } from "./CardWrapper";
import { Header } from "./Header";
import { FormError } from "../FormError";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel=""
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <FormError message="Oops! something went wrong" />
    </CardWrapper>
  );
};
