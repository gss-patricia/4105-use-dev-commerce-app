import { ReactNode } from "react";
import Button, { ButtonProps } from "../Button";

type IconButtonProps = {
  children: ReactNode;
} & ButtonProps;

const IconButton = ({ children, variant, ...props }: IconButtonProps) => (
  <Button style={{ gap: "8px" }} {...props}>
    {children}
  </Button>
);

export default IconButton;
