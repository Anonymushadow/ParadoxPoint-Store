export const Loader = ({ styles = [], type = "spinner", className="" }) => {
    const LoaderStyles = `loader__default__styles ${(Array.isArray(styles) && styles.length > 0 ? styles : [])
        .map((style) => `loader__${style}`)
        .join(" ")
        }`;

    switch (type) {
        case "spinner":
            return (
                <div className={`${LoaderStyles} ${className}`}></div>
            );

        case "dot":

        case "pulse":

        case "wave":
            return (
                <div className={LoaderStyles}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            );
    }
}