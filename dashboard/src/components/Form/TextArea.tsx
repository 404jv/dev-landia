import { forwardRef, ForwardRefRenderFunction } from "react";

interface TextAreaProps {
  name: string
  label: string;
  optional?: boolean
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> 
 = ({ name, label, optional = false, ...rest }, ref) => {
  return (
    <div>
      <label className="text-base text-blue-250 tracking-wider" htmlFor={name}>
        {label} {optional && <span className="text-gray-400">(opcional)</span>}
      </label>

      <div className='mt-2 flex items-center px-5 py-4 bg-gray-850 rounded-md border-2 border-transparent focus-within:border-blue-450'>
        <textarea
          name={name}
          ref={ref}
          {...rest}
          className="bg-transparent w-full text-gray-350 text-xl outline-none h-40 resize-none"
        />
      </div>    
    </div>
  )
}

export const TextArea = forwardRef(TextAreaBase)

