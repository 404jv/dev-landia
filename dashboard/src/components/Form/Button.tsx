import { Spinner } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
  variant?: 'default' | 'small'
}

export function Button({ title, loading = false, variant = 'default', type = 'submit', ...rest }: ButtonProps) {
  return (
    <button 
      type={type} 
      {...rest}
      className={`${variant === 'default' ? 'py-3 px-7 text-xl bg-gradient-to-r from-blue-350 to-purple-750' : 'py-1 px-2 text-xs bg-gray-450'} flex justify-center items-center rounded-md text-white hover:enabled:brightness-90 transition disabled:opacity-70 disabled:cursor-not-allowed`}
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