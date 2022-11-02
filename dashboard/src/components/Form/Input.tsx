import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  variant?: 'default' | 'dark';
  icon?: JSX.Element;
}

export function Input({ placeholder, icon, variant = 'default', ...rest }: InputProps) {
  return (
    <div className={`flex items-center px-5 py-4 ${variant === 'default' ? 'bg-gray-850' : 'bg-gray-950'} rounded-md border-2 border-transparent focus-within:border-blue-450`}>
      {icon}
      <input
        className={`bg-transparent ${icon ? 'ml-5' : ''} text-gray-350 text-xl outline-none placeholder:text-gray-700`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}