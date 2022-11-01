import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  label: string;
  variant?: 'default' | 'dark';
  error?: string;
}

const CheckboxBase: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps>
 = ({ name, value, label, variant = 'default', error, ...rest }, ref) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 mb-2">
        <label className="text-sm text-white tracking-wider" htmlFor={name}>
          {label}
        </label>
        { error && <span className="text-red text-sm">({error})</span> }
        <input
          id={name}
          name={name}
          value={value}
          className={`bg-gray-950 w-8 h-8 text-gray-350 text-xl outline-none placeholder:text-gray-700`}
          type="checkbox"
          ref={ref}
          {...rest}
        />
      </div>
    </div>
  )
}

export const Checkbox = forwardRef(CheckboxBase)