const Option = ({ ...props }) => {
    const { option, uniqueId, handleSelectedOption } = props;
    return (
        <>
            <input type="radio" name={`${uniqueId}`} id={option.id.toString()} onClick={() => handleSelectedOption(option)}/>
            <label htmlFor={option.id.toString()}>{option.value}</label>
        </>
    )
};

export default Option;
