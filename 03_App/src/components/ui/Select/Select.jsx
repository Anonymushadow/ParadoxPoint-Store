export const Select = ({ Options = [], id = "", styles = [], onChange = () => { }, name = "", className="" }) => {
    const SelectStyles = `select__default__styles ${(Array.isArray(styles) && styles.length > 0 ? styles : [])
        .map((style) => `select__${style}`)
        .join(" ")
    }`;

    return (
        <select name={name} id={id} className={`${SelectStyles} ${className}`} onChange={onChange}>
            {Options.length > 0 ? (
                Options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled || false}
                    >
                        {option.text}
                    </option>
                ))
            ) : (
                <option disabled value="">
                    Sin opciones disponibles
                </option>
            )}
        </select>
    );

}
