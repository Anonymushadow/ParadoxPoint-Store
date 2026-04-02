export const Textarea = ({ className="", placeholder = "", styles = [], id = "", handleChange, name = "", value }) => {
    const TextareaStyles = styles.length > 0
        ? `textarea__default__styles ${styles.map((style) => `textarea__${style}`).join(" ")}`
        : "textarea__default__styles";

    return (
        <textarea
            placeholder={placeholder}
            className={`${TextareaStyles} ${className}`}
            onChange={handleChange}
            name={name}
            id={id}
            value={value}
        ></textarea>
    );
}
