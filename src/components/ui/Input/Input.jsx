export const Input = ({ className="", handleChange, accept, type = "text", styles = [], placeholder, id, name, value, defaultChecked }) => {
    const InputStyles = `input__default__styles ${(Array.isArray(styles) && styles.length > 0 ? styles : [])
        .map((style) => `input__${style}`)
        .join(" ")
        }`;

    return (
        <input
            type={type}
            accept={accept || ""}
            placeholder={placeholder}
            onChange={typeof handleChange === "function" ? handleChange : handleChange}
            className={`${InputStyles} ${className}`}
            name={name}
            id={id}
            value={value}
            {...(defaultChecked !== undefined && { defaultChecked })}
        />
    );
};
