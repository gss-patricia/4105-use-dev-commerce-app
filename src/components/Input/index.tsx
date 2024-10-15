import Styles from "./Input.module.css";

export type InputProps = {
  variant?: "primary" | "secondary";
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  variant = "primary",
  type = "text",
  ...props
}: InputProps) => <input type={type} className={Styles[variant]} {...props} />;

export default Input;
