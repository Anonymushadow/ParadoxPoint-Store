export const Span = ({ styles, text, children, className=""  }) => {
    const SpanStyles = `span__default__styles ${(Array.isArray(styles) && styles.length > 0 ? styles : [])
        .map((style) => `span__${style}`)
        .join(" ")
    }`;

    return (
        <span className={`${SpanStyles} ${className}`}>
            {children ? children : text || ""}
        </span>
    );
}