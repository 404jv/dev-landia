import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
}

export function InputWithLabel({ name, label, placeholder, type = 'text', ...rest }: InputProps) {
  return (
    <div>
      <label className="text-base text-blue-250 tracking-wider mb-2 block" htmlFor={name}>
        {label}
      </label>
      <div className={`flex items-center ${type === 'number' ? 'w-3/5' : 'w-full'} px-5 py-4 bg-gray-850 rounded-md border-2 border-transparent focus-within:border-blue-450`}>
        <input
          name={name}
          className="bg-transparent w-full text-gray-350 text-xl outline-none"
          placeholder={placeholder}
          type={type}
          {...rest}
        />
      </div>
    </div>
  )
}