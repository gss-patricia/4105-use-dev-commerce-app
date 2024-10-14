import { CSSProperties, MouseEvent, ReactNode } from "react";
import classnames from "classnames"; // Para combinar classes dinamicamente
import Styles from "./Button.module.css";

type ButtonProps = {
  style?: CSSProperties;
  children?: ReactNode;
  text?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Define diferentes tamanhos
  onClick: (e: MouseEvent<HTMLElement>) => void;
};

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  style,
  onClick,
  ...props
}: ButtonProps) => (
  <button
    className={classnames(Styles[variant], Styles[size])}
    onClick={onClick}
    style={style}
    {...props}
  >
    {children}
  </button>
);

export default Button;
