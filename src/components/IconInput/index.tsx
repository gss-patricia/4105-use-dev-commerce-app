import { ReactNode } from "react";
import Styles from "./IconInput.module.css";
import Input, { InputProps } from "../Input";

type IconInputProps = {
  children: ReactNode;
} & InputProps;

const IconInput = ({
  variant = "primary",
  children,
  ...props
}: IconInputProps) => (
  <div className={Styles.iconInputContainer}>
    <Input variant={variant} {...props} />
    {children && <div className={Styles.iconContainer}> {children}</div>}
  </div>
);

export default IconInput;
