

const Input = ({ ...props }) => {
    return (
        <input
            className="bg-transparent border-b border-secondary text-2xl font--item text-white focus:outline-none"
            {...props}
        />
    )
}

export default Input
