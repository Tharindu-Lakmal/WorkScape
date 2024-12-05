import React from 'react'

const InputText = React.forwardRef(({ type, placeholder, styles, label, 
    register, name, error }, ref) => {
  return (
    <div className='w-[85%] flex flex-col mt-2'>
        <p className='text-normal mb-1'>{label}</p>

        <input type={type} name={name} placeholder={placeholder} 
        ref={ref} className={`text-bgDark rounded border border-gray-400 focus:outline-none
        focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base 
        px-4 py-2 ${styles}`} {...register} 
        aria-invalid={error ? 'true' : 'false'} />

        {error && <span className='text-xs text-red-500 mt-0.5'>{error}</span>}
    </div>
  )
});

export default InputText