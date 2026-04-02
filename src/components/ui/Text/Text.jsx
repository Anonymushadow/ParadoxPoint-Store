export const Text = ({ className="", text, styles, size = "p", spanTop, spanBottom }) => {
    const validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
    const Tag = validTags.includes(size) ? size : "p";

    const TextStyles = styles 
    ? `text__default__styles ${styles.map((style) => `text__${style}`).join(" ")}`
    : "text__default__styles";

    return (
        <Tag className={`${TextStyles} ${className}`}>
            {spanTop ? <span>{spanTop}</span> : "" }
            {text}
            {spanBottom ? <span>{spanBottom}</span> : "" }
        </Tag>
    );
}