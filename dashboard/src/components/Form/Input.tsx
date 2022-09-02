import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: JSX.Element;
}

export function Input({ placeholder, icon, ...rest }: InputProps) {
  return (
    <div className="flex items-center px-5 py-4 bg-gray-850 rounded-md border-2 border-transparent focus-within:border-blue-450">
      {icon}
      <input
        className={`bg-transparent ${icon ? 'ml-5' : ''} text-gray-350 text-xl outline-none`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}