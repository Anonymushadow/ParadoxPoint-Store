import React from "react";
import { Input, Textarea } from "../Components.ui.js";

export const Label = ({text = "", styles = [], forId = "", children, handleChange, className=""}) => {
    const LabelStyles = `label__default__styles ${(Array.isArray(styles) && styles.length > 0 ? styles : [])
        .map((style) => `label__${style}`)
        .join(" ")
    }`;
    console.log(`${text}: ${styles[0]}`)

    const processedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Input || React.isValidElement(child) && child.type === Textarea) {
            return React.cloneElement(child, { handleChange: handleChange });
        }
        return child;
    });

    return (
        <label htmlFor={forId} className={`${LabelStyles} ${className}`}>
            {processedChildren}
            {text && <span>{text}</span>}
        </label>
    );
};