import { Spinner } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading = false, type = 'submit', ...rest }: ButtonProps) {
  return (
    <button 
      type={type} 
      {...rest}
      className="py-3 px-7 flex justify-center items-center rounded-md bg-gradient-to-r from-blue-350 to-purple-750 text-xl text-white hover:enabled:brightness-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? 
        <div className="flex items-center gap-2">
          <Spinner size={24} className="animate-spin " />
          Carregando... 
        </div> 
        : title
      }
    </button>
  )
}