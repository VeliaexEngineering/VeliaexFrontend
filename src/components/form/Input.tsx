import React from 'react'

type InputType = {
    type: string
    name: string
    placeholder: string
    icon: string
}
function Input({type, name, placeholder, icon}:InputType) {
    return (
        <div className='relative flex items-center justify-center'>
            <img src={ icon } className='absolute left-5'/>
            <input type={type} name={name} placeholder={placeholder} className={`text-sm text-muted bg-inputLight dark:bg-gray dark:placeholder:text-placeholderGray outline-none focus:outline-blue py-[14px] px-10 pl-12 rounded-[4px] w-full`}/>
        </div>
    )
}

export default Input