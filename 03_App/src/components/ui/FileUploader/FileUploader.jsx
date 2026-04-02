export const FileUploader = ({ className="", handleChange, accept, styles = [], id, name, value, text }) => {
    const FileUploaderStyles = `file__uploader__default__styles ${(Array.isArray(styles) && styles.length > 0 ? styles : [])
        .map((style) => `file__uploader__${style}`)
        .join(" ")
        }`;

    return (
        <div className={`${FileUploaderStyles} ${className}`}>
            {/* Input oculto */}
            <input type="file" name={name} id={id || ""} onChange={handleChange} accept={accept || "*"}/>

            {/* Botón personalizado */}
            <label htmlFor={id || ""}>
                {text}
            </label>

            {/* Mostrar nombre del archivo seleccionado */}
            <p>Imagen seleccionada: {value || "ninguna"}</p>
        </div>
    );
}
