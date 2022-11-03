import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  variant?: 'default' | 'dark';
  icon?: JSX.Element;
  hasDeleteButton?: boolean;
  deleteFunction?: () => void;
}

export function Input({ placeholder, icon, variant = 'default', hasDeleteButton = false, deleteFunction, ...rest }: InputProps) {
  return (
    <div className={`flex ${hasDeleteButton && 'relative'} items-center px-5 py-4 ${variant === 'default' ? 'bg-gray-850' : 'bg-gray-950'} rounded-md border-2 border-transparent focus-within:border-blue-450`}>
      {hasDeleteButton && (
        <button 
          type="button" 
          className={`absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white text-lg font-bold`}
          onClick={deleteFunction}
        >
          X
        </button>
      )}
      {icon}
      <input
        className={`bg-transparent ${icon ? 'ml-5' : ''} text-gray-350 text-xl outline-none placeholder:text-gray-700`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}