import { Button } from "@components/ui/Components.ui";
import "./HomeAbout.css";
import { useNavigate } from "react-router-dom";

export const HomeAbout = () => {
    const Navigate = useNavigate();

    const handleScroll = () => {
        Navigate("/productos");
    };

    return (
        <section className="home__about__section" id="home__about__section">
            <div className="home__about__image__container">
                <img className="home__about__image" src="./images/home-about.png" />
            </div>
            <div className="home__about__content__container">
                <div className="home__about__content">
                    <h2 className="home__about__title">Que es ParadoxPoint Store</h2>
                    <p className="home__about__text">
                        Es el lugar donde terminan las cosas…
                        antes de empezar.
                        <br />
                        Objetos sin pasado.
                        Historias que todavía no ocurrieron.
                        <br />
                        Todo lo que ves existe…
                        pero no en el momento que creés.
                        <br />
                        Entraste por curiosidad.
                        Pero ya habías llegado antes.
                    </p>
                    <div className="home__about__button__container">
                        <Button styles={["cta", "medium"]} handleClick={handleScroll}>Sumergirse en el tiempo</Button>
                    </div>
                </div>
            </div>
            <div className="home__mobile__about__button__container">
                <Button styles={["cta", "medium"]} handleClick={handleScroll}>Sumergirse en el tiempo</Button>
            </div>
        </section>
    )
}