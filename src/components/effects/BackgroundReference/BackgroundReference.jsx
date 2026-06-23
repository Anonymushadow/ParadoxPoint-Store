import { useEffect, useState } from "react";
import "./BackgroundReference.css";

export const BackgroundReference = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleKey = (e) => {

            // evita cosas raras del navegador con F1
            e.preventDefault();

            if (e.key === "F2") {
                setShowOverlay(prev => !prev);
            }

            // bajar opacidad
            if (e.key === "F1") {
                setOpacity(prev => Math.max(0, prev - 0.1));
            }

            // subir opacidad
            if (e.key === "F3") {
                setOpacity(prev => Math.min(1, prev + 0.1));
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, []);

    if (!showOverlay) return null;

    return (
        <div
            className="figma-overlay"
            style={{ opacity }}
        ></div>
    );
};