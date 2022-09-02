import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, type = 'submit', ...rest }: ButtonProps) {
  return (
    <button 
      type={type} 
      {...rest}
      className="py-3 px-7 flex justify-center items-center rounded-md bg-gradient-to-r from-blue-350 to-purple-750 text-xl text-white hover:brightness-90 transition"
    >
      {title}
    </button>
  )
}