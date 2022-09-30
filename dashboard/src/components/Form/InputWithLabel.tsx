import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  variant?: 'default' | 'dark';
}

export function InputWithLabel({ name, label, variant = 'default', type = 'text', ...rest }: InputProps) {
  return (
    <div>
      <label className="text-base text-blue-250 tracking-wider mb-2 block" htmlFor={name}>
        {label}
      </label>
      <div className={`flex items-center ${type === 'number' ? 'w-2/3' : 'w-full'} px-5 py-4 ${variant === 'default' ? 'bg-gray-850' : 'bg-gray-950'} rounded-md border-2 border-transparent focus-within:border-blue-450`}>
        <input
          name={name}
          className="bg-transparent w-full text-gray-350 text-xl outline-none"
          type={type}
          {...rest}
        />
      </div>
    </div>
  )
}