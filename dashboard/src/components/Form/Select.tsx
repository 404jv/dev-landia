import { forwardRef, ForwardRefRenderFunction, SelectHTMLAttributes } from "react";

interface Option {
  id: string;
  title: string;
  order?: number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Option[];
  error?: string;
  optional?: boolean;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps>
 = ({ name, label, options, error = null, optional = false, ...rest }, ref) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-2">
        <label className="text-base text-blue-250 tracking-wider" htmlFor={name}>
          {label} {optional && <span className="text-gray-400">(opcional)</span>}
        </label>
        { error && <span className="text-red">({error})</span> }
      </div>

      <select className='flex items-center w-full px-5 py-4 text-gray-350 text-xl outline-none bg-gray-850 rounded-md border-2 border-transparent focus-within:border-blue-450'>
        {
          options.map(option => (
            <option key={option.id} className="bg-gray-850">
              {option.title}{option.order !== undefined && (`, ${option.order}`)}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export const Select = forwardRef(SelectBase);

