

type ButtonType = {
    className?: string
    children: string | JSX.Element
}
function Button({ className, children }:ButtonType) {
    return (
        <button className={`${className} border-none rounded-[4px] py-3  font-medium cursor-pointer`}>{ children }</button>
    )
}

export default Button