import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  variant?: 'default' | 'dark';
  inputSize?: 'default' | 'small';
  error?: string;
}

const InputWithLabelBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
 = ({ name, label, variant = 'default', inputSize='default', error = null, type = "text", ...rest }, ref) => {
  return (
    <div className={`${inputSize === 'small' ? 'w-2/3' : 'w-full'}`}>
      <div className="flex items-center gap-4 mb-2">
        <label className="text-base text-blue-250 tracking-wider" htmlFor={name}>
          {label}
        </label>
        { error && <span className="text-red">({error})</span> }
      </div>
      <div className={`flex items-center px-5 py-4 ${variant === 'default' ? 'bg-gray-850' : 'bg-gray-950'} rounded-md border-2 border-transparent focus-within:border-blue-450`}>
        <input
          name={name}
          className="bg-transparent w-full text-gray-350 text-xl outline-none"
          type={type}
          ref={ref}
          {...rest}
        />
      </div>
    </div>
  )
}

export const InputWithLabel = forwardRef(InputWithLabelBase)