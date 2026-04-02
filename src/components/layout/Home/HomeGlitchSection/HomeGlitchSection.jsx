import { useState, useEffect } from "react";
import "./HomeGlitchSection.css";

export const HomeGlitchSection = () => {
    const datos = [
        "¿Sabías que una bala de escopeta, como la que ves en la tienda, se dispara en varias sub-balas llamadas perdigones?",
        "¿Sabías que la tela de algodón puede encogerse hasta un 10% si se lava a más de 60°C?",
        "¿Sabías que los relojes mecánicos necesitan un mínimo de 8 horas de movimiento diario para no detenerse?"
    ];

    // Empezamos con el primer dato visible
    const [textoActual, setTextoActual] = useState(datos[0]);
    const [fade, setFade] = useState(true);
    const [indicesMostrados, setIndicesMostrados] = useState([0]);

    useEffect(() => {
        const intervalo = setInterval(() => {
            // Fade out primero
            setFade(false);

            setTimeout(() => {
                // Array de indices restantes
                const indicesRestantes = datos
                    .map((_, i) => i)
                    .filter(i => !indicesMostrados.includes(i));

                let nuevoIndice;
                if (indicesRestantes.length === 0) {
                    // Si ya mostramos todos, reiniciamos
                    setIndicesMostrados([]);
                    nuevoIndice = Math.floor(Math.random() * datos.length);
                    setIndicesMostrados([nuevoIndice]);
                } else {
                    nuevoIndice = indicesRestantes[Math.floor(Math.random() * indicesRestantes.length)];
                    setIndicesMostrados(prev => [...prev, nuevoIndice]);
                }

                setTextoActual(datos[nuevoIndice]);
                setFade(true);
            }, 500); // tiempo fade out
        }, 10000); // cada 10 segundos

        return () => clearInterval(intervalo);
    }, [datos, indicesMostrados]);

    return (
        <section className="home__glitch__section">
            <video
                className="home__glitch__bg__video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/Ruptura.webm" type="video/webm" />
            </video>

            <video
                className="home__glitch__top__video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/Top.webm" type="video/webm" />
            </video>

            <video
                className="home__glitch__bottom__video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/Bottom.webm" type="video/webm" />
            </video>

            <div className="home__glitch__text__container">
                <h2 className="home__glitch__title">Fragmentos de la Realidad</h2>
                <p className={`home__glitch__text ${fade ? "fade-in" : "fade-out"}`}>
                    {textoActual}
                </p>
            </div>
        </section>
    );
}