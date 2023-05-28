const Option = ({ ...props }) => {
    const { option, uniqueId, handleSelectedOption, disabled } = props;
    return (
        <>
            <input
                disabled={disabled}
                type="radio" name={`${uniqueId}`} id={option.id.toString()} onClick={() => handleSelectedOption(option)} />
            <label htmlFor={option.id.toString()}>{option.value}</label>
        </>
    )
};

export default Option;
