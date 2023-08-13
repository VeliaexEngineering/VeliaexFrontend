import React from 'react'

type ButtonType = {
    className?: string
    children: string
}
function Button({ className, children }:ButtonType) {
    return (
        <button className={`${className} border-none rounded-[4px] py-3 bg-blue dark:bg-white text-white dark:text-gray font-medium`}>{ children }</button>
    )
}

export default Button