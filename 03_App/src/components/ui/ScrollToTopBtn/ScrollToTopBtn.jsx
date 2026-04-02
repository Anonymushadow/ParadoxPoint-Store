import "./ScrollToTopBtn.css";
import { useEffect, useState } from "react";

export const ScrollToTopBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className={`scroll-top-btn ${visible ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Volver arriba"
        >
            ↑
        </button>
    );
};
