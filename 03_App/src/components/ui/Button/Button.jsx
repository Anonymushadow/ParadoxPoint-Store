import "./Button.css";

export const Button = ({ styles, text, handleClick, children, className="" }) => {
    const ButtonStyles = `button__default__styles ${
        (Array.isArray(styles) && styles.length > 0 ? styles : [])
            .map((style) => `button__${style}`)
            .join(" ")
    }`;

    return (
        <button
            className={`${ButtonStyles} ${className}`}
            onClick={typeof handleClick === "function" ? handleClick : () => {}}
        >
            {children || text || ""}
        </button>
    );
};
