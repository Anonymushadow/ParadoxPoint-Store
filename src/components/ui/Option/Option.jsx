export const Option = ({ items = [], styles = [], handleChange, className="" }) => {
    const OptionStyles = `option__default__styles ${styles.map((style) => `option__${style}`).join(" ")
        }`;

    return (
        <div className={`${OptionStyles} ${className}`}>
            {items.map((item, index) =>
                React.isValidElement(item) ? (
                    <div key={item.id || index}>
                        {React.cloneElement(item, { handleChange: handleChange })}
                    </div>
                ) : null
            )}
        </div>
    );
};
